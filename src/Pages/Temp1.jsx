
const Temp1 = () => {
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
                <div className="pt-5">
                    <p>In compliance with your instruction, we have executed the following as an agent for your account.</p>
                    <p className="jap">本公司以代理人身份已按照您的指示執行下列買賣。</p>
                </div>
                <div>
                    <h2 className="text-center font-semibold text-xl mt-5 bg-[#0A58CA] text-white p-2">TRADE CONFIRMATION <span className="jap">成交確認</span></h2>
                    <p className="mt-2">Exchange <span className="jap">交易所</span> : HKEX - Hong Kong Futures Exchange <span className="jap">香港期貨交易所</span></p>
                </div>
                <div className="mt-5">
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr className="border-0 font-semibold text-black text-[15px]">
                                    <td>
                                        <div className="border-b-2 border-[#0086E6] w-fit">
                                            <p>Trade Date</p>
                                            <p className="jap">成交日期</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="border-b-2 border-[#0086E6] w-fit">
                                            <p>Trade Ref.</p>
                                            <p className="jap">合約編號</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="border-b-2 border-[#0086E6] w-fit">
                                            <p>Description</p>
                                            <p className="jap">商品合約內容</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="border-b-2 border-[#0086E6]">
                                            <p>No. of Lots <span className="jap">手數</span></p>
                                        </div>
                                        <div className="flex justify-between mt-4">
                                            <div className="border-b-2 border-[#0086E6] w-fit">
                                                <p>Ref.</p>
                                                <p className="jap">參考</p>
                                            </div>
                                            <div className="border-b-2 border-[#0086E6] w-fit">
                                                <p>Buy</p>
                                                <p className="jap">買</p>
                                            </div>
                                            <div className="border-b-2 border-[#0086E6] w-fit">
                                                <p>Sell</p>
                                                <p className="jap">賣</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="border-b-2 border-[#0086E6] w-fit">
                                            <p>Buy Price</p>
                                            <p className="jap">買價</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="border-b-2 border-[#0086E6] w-fit">
                                            <p>Sell Price</p>
                                            <p className="jap">賣價</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="border-b-2 border-[#0086E6] w-fit">
                                            <p>Premium Received/(Paid)</p>
                                            <p className="jap">期權金收入/(支出)</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="border-b-2 border-[#0086E6] w-fit">
                                            <p>Commission</p>
                                            <p className="jap">佣金</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="border-b-2 border-[#0086E6] w-fit">
                                            <p>Exch. Fee & Levy</p>
                                            <p className="jap">交易費用及徵費</p>
                                        </div>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-0">
                                    <td>06JUL2021</td>
                                    <td>16376</td>
                                    <td>HSI 202107</td>
                                    <td className="flex justify-between">
                                        <p>d</p>
                                        <p>2</p>
                                        <p>1</p>
                                    </td>
                                    <td>24,000</td>
                                    <td>24,000</td>
                                    <td>ff</td>
                                    <td>HKD 140.00</td>
                                    <td>21.05</td>
                                </tr>
                                <tr className="border-0">
                                    <td>06JUL2021</td>
                                    <td>16376</td>
                                    <td>HSI 202107</td>
                                    <td className="flex justify-between">
                                        <p>d</p>
                                        <p>2</p>
                                        <p>1</p>
                                    </td>
                                    <td>24,000</td>
                                    <td>24,000</td>
                                    <td>ff</td>
                                    <td>HKD 140.00</td>
                                    <td>21.05</td>
                                </tr>


                                {/* necessary rows start from here */}
                                <tr className="border-b-2">
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className="flex justify-between border-t-2">
                                        <p>d</p>
                                        <p>2</p>
                                        <p>1</p>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>HKD 140.00</td>
                                    <td>21.05</td>
                                </tr>
                                <tr className="">
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className="flex justify-between">
                                        <p></p>
                                        <p></p>
                                        <p></p>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td>Currency Total <span>總計:</span></td>
                                    <td className="border-b-2">HKD 140.00</td>
                                    <td className="border-b-2">21.05</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex gap-10 mt-5">
                        <div>
                            <p>Trades are "Internet Tading" unless otherwise indicated in the "Ref," column.</p>
                            <p>[#] - Intermediary Execute [1] - T+1 Trade [D] - Day Trade [N] - Overnight</p>
                        </div>
                        <div className="jap">
                            <p>除「參考」欄特別指明外，所有買賣均為網上交易。</p>
                            <p>[#] - 交易由中介人執行 [1] - T+1交易 [D] - 即日平倉 [N] - 過市</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Temp1;