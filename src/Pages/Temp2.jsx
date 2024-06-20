import { useEffect, useState } from "react";

const Temp2 = () => {

    const [ccyList, setCcyList] = useState([]);

    useEffect(() => {
        const fetchVendors = async () => {
            try {
                const response = await fetch("/ccy.json");
                if (!response.ok) {
                    throw new Error("Could not fetch");
                }
                const data = await response.json();

                setCcyList(data.data.resultData);
            } catch (error) {
                console.log("could not fetch Vendors", error);
            }
        };
        fetchVendors();
    }, []);

    useEffect(() => {
        console.log("APAPAPAP", ccyList)
    }, [ccyList])





    return (
        <div className="w-[94%] mx-auto">
            <div className="flex justify-between border border-black p-5 my-5">
                <div>
                    <p>Test001</p>
                </div>
                <div className="flex justify-between gap-5">
                    <div className="text-[#0086E6]">
                        <p>Statement Date</p>
                        <p>Client Code</p>
                        <p>Sales Code</p>
                        <p>Sales Name</p>
                        <p>Page no</p>
                    </div>
                    <div>
                        <p>: 06 JUL 2021</p>
                        <p>: H001 Sales Code</p>
                        <p>: A001</p>
                        <p>: A001AE</p>
                        <p>: 1 / 4</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="text-center font-semibold text-2xl">
                    <h2>Futures and Options Combined Daily Statement and Contract Notes</h2>
                    <h2 className="jap">期貨及期權賬戶日結單</h2>
                </div>
                <div>
                    <h2 className="text-center font-semibold text-xl mt-5 bg-[#0A58CA] text-white p-2">DAILY ACCOUNT SUMMARY 每日戶口總結</h2>
                    <p className="mt-3">Exchange 交易所 : HKEX - Hong Kong Futures Exchange 香港期貨交易所</p>
                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className="font-semibold text-black border-b-2 border-[#0A58CA]">
                                <tr>
                                    <td className="w-full">
                                        <p>CCY</p>
                                        <p className="jap">貨幣</p>
                                    </td>
                                    <td className="w-full text-right">
                                        <p>HKD</p>
                                        <p className="jap">港元</p>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    ccyList.map((ld) => {
                                        return <tr>
                                            <td>
                                                <p>{`Exchange Rate (${ld.ccy})`}</p>
                                                <p>{`對換匯率 (${ld.ccy})`}</p>
                                            </td>
                                            <td>{ld.ex_rate}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Temp2;