import React from 'react';

const WwcdAlert = ({ Wwcd, Tourn }) => {

    const primaryColor = Tourn.primaryColor;
    const secondaryColor = Tourn.secondaryColor;
    const textColor1 = Tourn.textcolor1;
    const textColor2 = Tourn.textcolor2
    return (
        <>
        
        {
            Wwcd && (
                <div className="Wwcd w-[1800px] h-[1080px] relative">
                {/* Replace all dynamic image sources and text content with static placeholders */}
                <img className='relative top-[147px] left-[0px]' src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717262687/wwcdalert_homdwz.png" alt="Placeholder" />
                <img className="Layer4 left-[230px] top-[147px] absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717283023/Layer_5_xzrkki.png" alt="Placeholder" />
                <img className="Layer7 left-[1294px] top-[147px] absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717283185/Layer_7_vu5uk2.png" alt="Placeholder" />
                <img className="Layer6 left-[786px] top-[147px] absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717283385/Layer_6_cnd9gl.png" alt="Placeholder" />
                <div style={{
                    background: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))`,
                }} className="Rectangle58 w-[1920px] h-96 left-0 top-[746px] absolute gradient-to-b-rgba'" />
                <img className="PxHoraaEsportsDarkmode2 w-40 h-40 left-[1679px] top-[793px] absolute" src={Wwcd.teamLogo} alt="Placeholder" />
                <div style={{ fontFamily: "Violenta Solid Unicase" }} className="HoraEsports w-screen h-24 left-[1237px] top-[951px] absolute text-white text-8xl font-medium font-abhaya text">{Wwcd.teamName}</div>
                <div  style={{
                         backgroundImage: `linear-gradient(to bottom right, ${primaryColor}, ${secondaryColor})`,
                         backgroundClip: 'text',
                         WebkitTextFillColor: 'transparent',
                     }} className="Dinner left-[721px] top-[848px] absolute text-[209px] font-normal font-['Tungsten'] ">DINNER</div>
                <div   style={{
                         backgroundImage: `linear-gradient(to bottom right, ${primaryColor}, ${secondaryColor})`,
                         backgroundClip: 'text',
                         WebkitTextFillColor: 'transparent',
                     }}className="Chicken w-60 h-28 left-[478px] top-[975px] absolute text-[101px] font-semibold font-['Tungsten']  ">CHICKEN</div>
                <div className="Winner w-60 h-24 left-[478px] top-[884px] absolute text-center text-white text-[101px] font-semibold font-['Tungsten']">WINNER</div>
                <div className="Winner left-[11px] top-[848px] absolute text-white text-[209px] font-normal font-['Tungsten']">WINNER</div>
            </div>
            )
        }
        </>
       
    );
};

export default WwcdAlert;
