export const TitleCard = () => {
    return (
        <div className="flex flex-col gap-6 py-20 px-10">
            <h1 className="text-[clamp(60px,1vw,64px)]">Valli Chidambaram</h1>
            <h2 className="text-3xl">Software Development Engineer</h2>
            <div className="flex gap-5">
                <a href="https://www.linkedin.com/in/vallinayakichidambaram/" target="_blank"><img src='/mail-icon.svg' alt="gmail" className="w-[30px] h-[30px]"></img></a>
                <a href="https://www.linkedin.com/in/vallinayakichidambaram/" target="_blank"><img src='/linkedin-icon.svg' alt="https://www.linkedin.com/in/vallinayakichidambaram/" className="w-[30px] h-[30px]"></img></a>
                <a href="https://github.com/vallinayakichidambaram" target="_blank"><img src='/github-icon.svg' alt="https://github.com/vallinayakichidambaram" className="w-[30px] h-[30px]"></img> </a>
            </div>
            <a href="/valli-resume.pdf" target="_blank"><button>Download Resume</button> </a>
        </div>
    )
}
