import * as React from 'react'
import { forwardRef, useRef, useState, HTMLAttributes, SVGProps } from 'react'
import styled, { css } from 'styled-components'
import { Icon } from '../Icon'
import { Paper } from '../Paper'
import { Button } from '../Button'
import { close } from '@equinor/eds-icons'
import { spacingsTemplate, typographyTemplate } from '../../utils'
import {
  usePopper,
  useOutsideClick,
  Placement,
  useGlobalKeyPress,
  useCombinedRefs,
} from '../../hooks'
import { popover as tokens } from './Popover.tokens'

type StyledPopoverProps = Pick<PopoverProps, 'open'>

const StyledPopover = styled(Paper)<StyledPopoverProps>`
  ${typographyTemplate(tokens.header)}
  ${spacingsTemplate(tokens.spacings)}
  display: grid;
  grid-gap: ${tokens.gridGap};
  grid-auto-columns: auto;
  align-items: center;
  align-content: start;
  background: ${tokens.background};
  width: max-content;
  max-height: ${tokens.popover.maxHeight};
  max-width: ${tokens.popover.maxWidth};
  min-height: ${tokens.popover.minHeight};
  border-radius: ${tokens.borderRadius};
  z-index: 100;

  ${({ open }) =>
    css({
      visibility: open ? 'visible' : 'hidden',
    })};

  .arrow {
    z-index: -1;
    width: ${tokens.arrow.width};
    height: ${tokens.arrow.height};
  }
  &[data-popper-placement^='top'] > .arrow {
    bottom: ${tokens.arrow.placement};
    .arrowSvg {
      transform: rotate(-90deg);
    }
  }

  &[data-popper-placement^='bottom'] > .arrow {
    top: ${tokens.arrow.placement};
    .arrowSvg {
      transform: rotate(90deg);
    }
  }

  &[data-popper-placement^='left'] > .arrow {
    right: ${tokens.arrow.placement};
    .arrowSvg {
      transform: rotate(-180deg);
    }
  }

  &[data-popper-placement^='right'] > .arrow {
    left: ${tokens.arrow.placement};
  }
`

const StyledCloseButton = styled(Button)`
  position: absolute;
  top: ${tokens.closeButton.placement};
  right: ${tokens.spacings.right};
  height: ${tokens.closeButton.height};
  width: ${tokens.closeButton.width};
  &:after {
    height: ${tokens.closeButton.height};
  }
`

const ArrowWrapper = styled.div`
  &,
  &::before {
    position: absolute;
    width: ${tokens.arrow.width};
    height: ${tokens.arrow.height};
    z-index: -1;
  }

  &::before {
    content: '';
  }
`

type ArrowProps = {
  ref?: React.MutableRefObject<null>
} & SVGProps<SVGSVGElement>

const PopoverArrow = styled.svg<ArrowProps>`
  width: ${tokens.arrow.width};
  height: ${tokens.arrow.height};
  position: absolute;
  fill: ${tokens.background};
  filter: drop-shadow(-4px 0px 2px rgba(0, 0, 0, 0.2));
`
export type PopoverProps = {
  /**  Popover placement relative to anchor */
  placement?: Placement
  /**  On Close callback */
  onClose?: () => void
  /** Anchor element reference */
  anchorEl?: HTMLElement | null
  /** Is Popover open */
  open: boolean
} & HTMLAttributes<HTMLDivElement>

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  function Popover(
    { children, placement = 'bottom', anchorEl, open, onClose, ...rest },
    ref,
  ) {
    const popperRef = useRef<HTMLDivElement | null>(null)
    const [arrowRef, setArrowRef] = useState<HTMLDivElement | null>(null)
    useOutsideClick(popperRef, (e: MouseEvent) => {
      if (open && onClose !== null && !anchorEl.contains(e.target as Node)) {
        onClose()
      }
    })

    useGlobalKeyPress('Escape', () => {
      if (onClose !== null) {
        onClose()
      }
    })

    const { styles, attributes } = usePopper(
      anchorEl,
      popperRef.current,
      arrowRef,
      placement,
    )

    const props = {
      open,
      ...rest,
      ...attributes.popper,
    }

    return (
      <StyledPopover
        ref={useCombinedRefs(popperRef, ref)}
        elevation="overlay"
        style={styles.popper}
        {...props}
        data-testid="popover"
      >
        <ArrowWrapper ref={setArrowRef} style={styles.arrow} className="arrow">
          <PopoverArrow className="arrowSvg">
            <path d="M0.504838 4.86885C-0.168399 4.48524 -0.168399 3.51476 0.504838 3.13115L6 8.59227e-08L6 8L0.504838 4.86885Z" />
          </PopoverArrow>
        </ArrowWrapper>

        {children}
        <StyledCloseButton
          onClick={onClose}
          variant="ghost_icon"
          data-testid="popover-close"
        >
          <Icon name="close" data={close} title="close" size={24} />
        </StyledCloseButton>
      </StyledPopover>
    )
  },
)
