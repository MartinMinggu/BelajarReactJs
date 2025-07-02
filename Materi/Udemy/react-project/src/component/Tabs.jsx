// tags button container bisa diubah ubah : misal jadi menu
export default function Tabs({ button, children, ButtonContainer = 'menu' }) {
    // if (!buttonContainer) buttonContainer = 'menu';
    // const ButtonContainer = buttonContainer;
    // sebelumnya ini meni
    return <>
        <ButtonContainer>
            {button}
        </ButtonContainer>
        {children}
    </>
}