export const TitleCard = () => {
    return (
        <div className="flex flex-col gap-6 py-20 px-10">
            <h1 className="text-[clamp(60px,1vw,64px)]">Valli Chidambaram</h1>
            <h2 className="text-3xl">Software Development Engineer - Backend & Blockchain</h2>

            <div className="flex gap-5">
                <img src='/mail-icon.svg' alt="gmail" className="w-[30px] h-[30px]"></img>
                <img src='/linkedin-icon.svg' alt="gmail" className="w-[30px] h-[30px]"></img>
                <img src='/github-icon.svg' alt="gmail" className="w-[30px] h-[30px]"></img>
            </div>
        </div>
    )
}
