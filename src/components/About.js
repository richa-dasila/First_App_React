import React,{useState}from 'react'

export default function About() {
    const[myStyle, setmyStyle] = useState({
            color:'dark',
            backgroundColor:'white'
    });
const [btntext, setbtntext] = useState("Enable Dark Mode")

    const toggleStyle=()=>{
    if(myStyle.color == 'black'){
        setmyStyle({
            color:'white',
            backgroundColor:'black',
        })
        setbtntext("Enable dark mode")
    } else{
        setmyStyle({
            color:'black',
            backgroundColor:'white'
        })
        setbtntext("Enable light mode")

    }
}
  return (
    <div>
        <h1> About Us</h1>
        <div className="accordion accordion-flush" id="accordionFlushExample" >
             <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                About
            </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body"><strong>Are you a student, professional, or aspiring writer seeking to elevate your essays to the next level?</strong> Look no further! Our Essay Editor Website is here to guide you on your journey towards crafting compelling, error-free, and impeccable pieces of writing.

                    We understand the importance of clear, concise, and well-structured content in achieving your academic or professional goals. Whether it's an essay, research paper, article, or any other written work, our team of experienced editors is dedicated to helping you refine and enhance your writing, leaving no room for errors or inconsistencies.

                    Why settle for mediocrity when you can shine with excellence? Our Essay Editor Website offers a range of services tailored to meet your specific needs. From proofreading and grammar checks to in-depth editing and feedback, we are committed to delivering outstanding results that showcase your ideas in the best possible light.

                    At our Essay Editor Website, we believe that every piece of writing deserves a keen eye and a gentle touch. Our editors are not just grammar enthusiasts but also passionate wordsmiths who appreciate the power of language. They will not only fix any grammatical errors but also suggest improvements in style, tone, and overall clarity.</div>
            </div>
        </div>
    <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header">
        <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Motivation
        </button>
        </h2>
        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body"> At the core of our Essay Editor Website lies a deep-rooted passion for the written word and a relentless commitment to empowering writers of all levels. We believe that every individual's ideas, thoughts, and stories are valuable, and it is our mission to help these ideas flourish through the power of effective communication.

        Our motivation stems from recognizing the transformative potential that a well-crafted essay holds. We understand the frustration and challenges writers face when trying to convey their messages with clarity and impact. Often, a brilliant idea can be obscured by grammatical errors, inconsistent phrasing, or lack of coherence. We refuse to let such hurdles hinder the brilliance of your words.</div>
        </div>
    </div>
    <div className="accordion-item" style={myStyle}>
         <h2 className="accordion-header">
        <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Our Story
        </button>
        </h2>
        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">Once in the mysterious city of BatmanRio, where shadows danced across towering buildings, a solitary figure known as BatmanRio emerged as a guardian of justice and a lover of language. Inspired by the wisdom he found in Batman comic books, he recognized the transformative power of words and their potential to inspire change.

        With a passion for both writing and vigilant justice, BatmanRio envisioned a unique platform that would empower writers to polish their craft and elevate their ideas. Fuelled by the desire to make a positive impact on the world of writing, he meticulously designed the "Essay Editor Website."

        Within its virtual walls, writers from all walks of life found a safe haven to refine their work. Expert editing and constructive feedback became the guiding light, ensuring that their words resonated with clarity and brilliance.</div>
        </div>
    </div>
</div>
    <div className="container my-3">
    <button  onClick={toggleStyle} className ="btn btn-primary" type="button">Dark Mode</button>
    </div>
</div>
  )
}
