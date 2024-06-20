
const Navbar = () => {
    return (
        <div>
            <div className="flex">
                <div className="bg-[#000833] p-[5px] w-full"></div>
                <div className="bg-[#0086E6] p-[5px] w-full"></div>
                <div className="bg-[#FDD23C] p-[5px] w-full"></div>
            </div>
            <div className="w-[94%] mx-auto flex justify-between mt-5">
                <div className="flex gap-2">
                    <div>
                        <img src="vite.svg" alt="" />
                    </div>
                    <div className="font-semibold">
                        <h3 className="text-2xl">SPDemo Securities & Futures</h3>
                        <p className="jap">銳鋼模擬證券期貨</p>
                    </div>
                </div>
                <div className="text-right">
                    <p>Units A - C, 20/F, Lockhart Centre, 301 - 307 Lockhart Road, Wanchai, Hong Kong</p>
                    <p className="jap">香港灣仔駱克道301-307號洛克中心20樓</p>
                    <div className="flex gap-2 justify-end">
                        <p>Tel: (852) 2127 7421</p>
                        <p>Web: www.sharppoint.com.hk</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;