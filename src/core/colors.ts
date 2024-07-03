export enum Colors {  
    BLEU_OUTREMER="#0D2D45",
    BLEU_NUIT="#071520",
    TURQUOISE="#2AB8CD",
    BLEU_LAGON="#7FC9CE",
    LUEUR_BLEUE="#93D3E9",
    ORANGE="#F6A316",

    BUTTON_GRADIENT=`
    radial-gradient(
        40% 80% at 0% 0%, 
        ${TURQUOISE} 0.01%,
        ${BLEU_OUTREMER} 100%
    )`,
    BUTTON_GRADIENT_OPACITY_50=`
    radial-gradient(
        40% 80% at 0% 0%, 
        color-mix(in srgb, ${TURQUOISE}, transparent 50%) 0.01%,
        color-mix(in srgb, ${BLEU_OUTREMER}, transparent 50%) 100%
    )`,


    // Theme
    PRIMARY= BLEU_OUTREMER,
    SECONDARY= ORANGE,
}