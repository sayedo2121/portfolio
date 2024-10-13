import ManikinAvatar from "@/app/components/ManikinAvatar";

export default function Page() {
    return (
    <div className="flex flex-col gap-10">
        <div className="flex flex-wrap flex-row justify-center items-center gap-10">
            <div className="w-1/3 min-w-32 flex items-center justify-center">
                <ManikinAvatar />
            </div>
            <div className="flex-1 min-w-52">
                <h1 className="text-3xl font-bold">Sayed Husain Kadhem</h1>
                <p className="text-xl font-light">
                    Software Engineer
                </p>
                <p className="text-justify mt-10">
                    <span className="text-3xl font-bold font-mono">Hello World</span>,<br/> 
                    I'm Sayed! Welcome to my little knock in space. Yes, you're right! That manikin is meant to be me 🙂
                    <br/>
                    <br/>
                    I am a software engineer with +2 years of experience in the 
                    IT industry delivering real IT products to +1,000 users and 
                    working in live environments with state-of-the-art technologies 
                    like AngularJS and React. Along that, I have deep interest and practical know-how in  
                    AI especially in computer vision and autonomous driving.
                    <br/>
                    <br/>
                    Having aced my bachelors degree in Computer Science with AI by achieving a first-class,
                    it goes without saying that I always strive for the highest goals and pay attention to
                    the most intricate details.
                    <br/>
                    <br/>
                    <br/>
                    <span className="text-3xl font-bold font-mono">Waffle aside</span>,<br/>
                    name something that can be defined in three words? Well, me!<br/><br/>
                    I call them "the three P's":<br/>
                    Programmer<br/>
                    Photogragher<br/>
                    Petrolhead<br/>
                    <br/>
                    Programmer is self-explanatory. I do photgraphy as a hobby with my Sony A7III.
                     Being a petrolhead, my all-time favorite car is a 1955 Mercedes-Benz 300SL Gullwing. Weird one I know! 
                </p>
            </div>
        </div>
    </div>)
}