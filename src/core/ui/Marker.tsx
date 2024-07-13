import { Box, SxProps } from "@mui/material";
import { Colors } from "../colors";

export default function Marker(props: MarkerProps) {
  return (
    <Box
      width={props.size ?? 11}
      height={props.size ?? 11}
      sx={{
        borderRadius: '50%',
        background: props.bgColor ?? Colors.BLEU_NUIT,
        border: 
            props.border ??
            `${props.borderSize ?? '1mm'} solid ${props.color ?? 'white'}`,
        transition: 'all .25s',
        ...props.sx
      }}
    />
  )
}

export interface MarkerProps {
    size?: number;
    borderSize?: string;
    border?: string;
    color?: string;
    bgColor?: string;
    sx?: SxProps;
}