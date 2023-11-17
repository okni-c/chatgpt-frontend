import Image from "next/image";

interface test {
    sendLog: () => void
}

export default function Login({ sendLog }: test) {

    return (
        <main className="login-backdrop flex flex-col justify-center px-4">
            <div className="max-w-[517px] w-full max-h-[539px] h-full flex flex-col justify-start items-center bg-[#16181A] p-9 mx-auto rounded-[30px] border-[#303233] border drop-shadow-xl">
                <Image src={'/chat-logo.png'} alt='ChatGPT Logo' width={71} height={71} />
                <h1 className="login-heading">ChatGPT</h1>
                <form className="flex gap-4 flex-col mt-[68px] max-w-[304px] w-full" onSubmit={(e) => {e.preventDefault()}}>
                    <label htmlFor="email" className="sr-only">Enter your email</label>
                    <input type="email" name="email" id="email" placeholder="Enter email" className="user-input-field"></input>

                    <label htmlFor="email" className="sr-only">Enter your password</label>
                    <input type="password" name="password" id="password" placeholder="Enter password" className="user-input-field"></input>
                    <div className="flex gap-3 w-full justify-between items-center mt-[38px]">
                        <button type="submit" className="login-btn" onClick={sendLog}>Login</button>
                        <p>or</p>
                        <button type="submit" className="login-btn" onClick={sendLog}>Signup</button>
                    </div>
                </form>
            </div>
            <div className="absolute w-full bottom-3 -mx-4">
                <p className="text-sm text-[#55576A] max-w-[513px] w-full mx-auto text-center">This is a passion project made by a team of web developers and data scientists. Although we support ChatGPT, we are in no way affiliated with its creators.</p>
            </div>
        </main>
    );
}