import { Button } from "@mui/material";
import { Colors } from "../colors";
import { SHAKE } from "../animations";

export default function CTAButton(props: CTAButtonProps) {
  return (
    <Button
      data-testid="ctaButton"
      variant="contained"
      disableRipple
      sx={{
        background: Colors.BUTTON_GRADIENT_OPACITY_50,
        width: props.style?.width ? props.style.width :'164px',
        height: props.style?.height ? props.style.height : '73px',
        padding: '12px 25px 12px 25px',
        gap: '10px',
        borderRadius: '128px',
        boxShadow: `2px 2px 3px 0px ${Colors.LUEUR_BLEUE} inset`,
        textTransform: 'none',
        fontSize: props.style?.fontSize ? props.style.fontSize : '20px',
        fontWeight: props.style?.fontWeight ? props.style.fontWeight : 'bold',
        lineHeight: 'initial',
        textAlign: 'center',
        color: Colors.ORANGE,
        ':hover': {
          animation: `${SHAKE} 0.82s cubic-bezier(.36, .07, .19, .97) both infinite;`,
          boxShadow: `
          0 0 8px ${Colors.LUEUR_BLEUE},
          inset 0 0 8px ${Colors.LUEUR_BLEUE},
          0 0 16px ${Colors.TURQUOISE},
          inset 0 0 16px ${Colors.TURQUOISE},
          0 0 32px ${Colors.TURQUOISE},
          inset 0 0 32px ${Colors.TURQUOISE} `,
          background: Colors.BUTTON_GRADIENT,
        },

      }}
      href={props.href}
    >
      {props.children}
    </Button>
  )
}

export interface CTAStyleProps {
  width: string;
  height: string;
  fontSize?: string;
  fontWeight?: string;
}

export interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  style?: CTAStyleProps;

}