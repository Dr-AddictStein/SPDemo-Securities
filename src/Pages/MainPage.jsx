import { useEffect, useState } from "react";

const MainPage = () => {

  const [ccyList, setCcyList] = useState([]);
  const [sysDate, setSysDate] = useState([]);
  const [doneTrade, setDoneTrade] = useState([]);
  const [inOut, setInOut] = useState([]);
  const [closeOut, setCloseOut] = useState([]);

  const [tradeTable, setTradeTable] = useState([]);
  const [closedTable, setClosedTable] = useState([]);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await fetch("../../Json Data/Json Data (_Dummy API_)/clientMast.json");
        if (!response.ok) {
          throw new Error("Could not fetch");
        }
        const data = await response.json();

        setCcyList(data.data.resultData[0]);
      } catch (error) {
        console.log("could not fetch Vendors", error);
      }
    };
    const fetchDate = async () => {
      try {
        const response = await fetch("../../Json Data/Json Data (_Dummy API_)/sys_date.json");
        if (!response.ok) {
          throw new Error("Could not fetch");
        }
        const data = await response.json();

        setSysDate(data.data.resultData[0][0].sys_date);
      } catch (error) {
        console.log("could not fetch Vendors", error);
      }
    };
    const fetchDoneTrade = async () => {
      try {
        const response = await fetch("../../Json Data/Json Data (_Dummy API_)/done_trade.json");
        if (!response.ok) {
          throw new Error("Could not fetch");
        }
        const data = await response.json();

        setDoneTrade(data.data.resultData[0]);
      } catch (error) {
        console.log("could not fetch Vendors", error);
      }
    };
    const fetchInOut = async () => {
      try {
        const response = await fetch("../../Json Data/Json Data (_Dummy API_)/fundinout.json");
        if (!response.ok) {
          throw new Error("Could not fetch");
        }
        const data = await response.json();

        setInOut(data.data.resultData[0]);
      } catch (error) {
        console.log("could not fetch Vendors", error);
      }
    };
    const fetchCloseOut = async () => {
      try {
        const response = await fetch("../../Json Data/Json Data (_Dummy API_)/closecout.json");
        if (!response.ok) {
          throw new Error("Could not fetch");
        }
        const data = await response.json();

        setCloseOut(data.data.resultData);
      } catch (error) {
        console.log("could not fetch Vendors", error);
      }
    };
    fetchVendors();
    fetchDate();
    fetchDoneTrade();
    fetchInOut();
    fetchCloseOut();
  }, []);

  useEffect(() => {
    console.log("APAPAPAP", ccyList)
  }, [ccyList])
  useEffect(() => {
    console.log("Date", sysDate)
  }, [sysDate])
  useEffect(() => {
    console.log("Done", doneTrade)
  }, [doneTrade])
  useEffect(() => {
    console.log("intout", inOut)
  }, [inOut])
  useEffect(() => {
    console.log("closeout", closeOut)
  }, [closeOut])

  useEffect(() => {
    if (doneTrade && inOut) {
      let dex = [];

      let totalComm = 0.0;
      let totalLevy = 0.0;

      for (let i = 0; i < doneTrade.length; i++) {
        let desc;
        let fv_id;
        totalComm = totalComm + parseFloat(doneTrade[i].comm)
        totalLevy = totalLevy + parseFloat(doneTrade[i].levy)
        for (let j = 0; j < inOut.length; j++) {
          if (inOut[j].acc_id === doneTrade[i].acc_id) {
            desc = inOut[j].description;
            fv_id = inOut[j].fv_id;
            break;
          }
        }
        const dat = { ...doneTrade[i], description: desc, fv_id: fv_id };
        dex.push(dat);
      }

      dex.push({
        trd_date: "Total 總計:",
        fv_id:"Total 總計:",
        comm: totalComm,
        levy: totalLevy,
      })

      setTradeTable(dex);
    }
  }, [doneTrade, inOut])

  useEffect(() => {
    if (doneTrade && inOut) {
      let dex = [];

      let totalProf = 0.0;

      for (let i = 0; i < closeOut.length; i++) {
        let desc;
        totalProf = totalProf + parseFloat(closeOut[i].trade_pl);

        for (let j = 0; j < inOut.length; j++) {
          if (inOut[j].acc_id === closeOut[i].acc_id) {
            desc = inOut[j].description;
            break;
          }
        }
        const dat = { ...closeOut[i], description: desc };
        dex.push(dat);
      }

      dex.push({
        description: "Total 總計:",
        trade_pl: totalProf
      })

      setClosedTable(dex);
    }
  }, [closeOut, inOut])

  useEffect(() => {
    console.log("table 2", tradeTable);
  }, [tradeTable])
  useEffect(() => {
    console.log("table 3", closedTable);
  }, [closedTable])


  return (
    <div className="w-[94%] mx-auto">
      <div className="flex justify-between border border-black p-5 my-5 rounded">
        <div>
          <p>Test001</p>
        </div>
        <div className="flex justify-between gap-5">
          <div className="text-[#0086E6]">
            <p>Statement Date &nbsp; 結單日期</p>
            <p>Client Code &nbsp; 客戶編號</p>
            <p>Sales Code &nbsp; 經紀編號</p>
            <p>Sales Name &nbsp; 經紀名稱</p>
          </div>
          <div>
            <p>: 06 JUL 2021</p>
            <p>: H001 Sales Code</p>
            <p>: A001</p>
            <p>: A001AE</p>
          </div>
        </div>
      </div>
      <div className="border border-black p-5 my-5 rounded">
        <div>
          <div className=" font-bold text-2xl">
            <h2>
              Futures and Options Combined Daily Statement and Contract Notes
            </h2>
            <h2 className="jap">期貨及期權賬戶日結單</h2>
          </div>
          <div className="pt-5">
            <p>
              In compliance with your instruction, we have executed the
              following as an agent for your account.
            </p>
            <p className="jap">
              本公司以代理人身份已按照您的指示執行下列買賣。
            </p>
          </div>
        </div>
        {/* Margin Call Advice Card */}
        <div className="bg-[#f8d7da] p-5 rounded my-10">
          <h2 className="text-[#6a1a21] font-bold">
            MARGIN CALL ADVICE 追收保證金通知
          </h2>
          <p className="font-normal">
            YOU HAVE A MARGIN CALL OF HKD, PLEASE SETTLE THE OUTSTANDING
            AMOUNT IMMEDIATELY :
          </p>
          <p>閣下未達最低保證金要求，請盡快存入不足額 :</p>
          <h4 className="font-bold">HKD 568,001.62 </h4>
        </div>
        {/* Accordian section */}
        <div>
          <div className="collapse collapse-plus  ">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-custom-blue font-bold border-b-1  border-custom-blue">
              ACCOUNT INFORMATION 帳戶資料
            </div>
            <div className="collapse-content  overflow-x-auto mt-2">
              <div className="flex justify-between items-center">
                <p className="flex flex-col">
                  <span>Statement Date</span>
                  <span> 結單日期</span>
                </p>
                <p>{sysDate}</p>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <p className="flex flex-col">
                  <span>Client Code</span>
                  <span> 客戶編號</span>
                </p>
                <p>{ccyList.acc_no}</p>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <p className="flex flex-col">
                  <span>Sales Code</span>
                  <span> 經紀編號</span>
                </p>
                <p>A001</p>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <p className="flex flex-col">
                  <span>Sales Name</span>
                  <span> 經紀名稱</span>
                </p>
                <p>A001AE</p>
              </div>
              <hr />
            </div>
          </div>
          <div className="collapse collapse-plus ">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-custom-blue font-bold border-b-1 border-custom-blue">
              TRADE CONFIRMATION 成交確認
            </div>
            <div className="collapse-content  overflow-x-auto mt-2  ">
              <div className="max-w-full">
                <table className="table table-zebra min-w-max">
                  {/* head */}
                  <thead className="font-bold">
                    <tr>
                      <th>
                        Trade Date <br /> 成交日期
                      </th>
                      <th>
                        Description <br /> 描述
                      </th>
                      <th>
                        Trade Ref. <br /> 交易参考
                      </th>
                      <th>
                        T+1 <br /> T+1
                      </th>
                      <th>
                        Day/Overnight <br /> 日间/隔夜
                      </th>
                      <th>
                        Buy <br /> 买入
                      </th>
                      <th>
                        Sell <br /> 卖出
                      </th>
                      <th>
                        Buy Price <br /> 买入价
                      </th>
                      <th>
                        Sell Price <br /> 卖出价
                      </th>
                      <th>
                        Premium Received/Paid <br /> 收到/支付的保费
                      </th>
                      <th>
                        Currency <br /> 货币
                      </th>
                      <th>
                        Commission <br /> 佣金
                      </th>
                      <th>
                        Exch. Fee & Levy <br /> 交易费及征费
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      tradeTable.map((dat) => {
                        return (
                          <tr className="hover">
                            <td>{dat.trd_date}</td>
                            <td>{dat.description}</td>
                            <td>{dat.ref}</td>
                            <td>{dat.T1_trade}</td>
                            <td>{dat.day_qty}</td>
                            <td>{dat.buy_sell}</td>
                            <td>{dat.buy_sell}</td>
                            <td>MISSING</td>
                            <td>MISSING</td>
                            <td>{dat.opt_prem}</td>
                            <td>{dat.ccy_trd}</td>
                            <td>{dat.comm}</td>
                            <td>{dat.levy}</td>
                          </tr>
                        )
                      })
                    }

                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="collapse collapse-plus ">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-custom-blue font-bold border-b-1 border-custom-blue">
              CLOSED POSITIONS 平倉合約
            </div>
            <div className="collapse-content  overflow-x-auto mt-2">
              <div className=" max-w-full">
                <table className="table table-zebra min-w-max">
                  {/* head */}
                  <thead className="font-bold">
                    <tr>
                      <th rowSpan={2}>
                        Description <br />
                        商品合約內容
                      </th>
                      <th
                        colSpan={5}
                        className="text-center border-b border-custom-blue "
                      >
                        Open Order <br /> 成交日期
                      </th>

                      <th
                        colSpan={5}
                        className="text-center border-b border-custom-blue"
                      >
                        Closed Order <br /> 交易参考
                      </th>
                      <th rowSpan={2}>
                        Currency <br /> 貨幣
                      </th>
                      <th rowSpan={2}>
                        Gross Profit / (Loss) <br /> 平倉盈/(虧)
                      </th>
                    </tr>
                    <tr className="font-bold ">
                      <th>
                        Trade Date <br /> 成交日期
                      </th>

                      <th>
                        Ref. No <br /> 交易参考
                      </th>

                      <th>
                        Buy <br /> 买入
                      </th>
                      <th>
                        Sell <br /> 卖出
                      </th>

                      <th>
                        Trade Price <br /> 卖出价
                      </th>
                      <th>
                        Trade Date <br /> 成交日期
                      </th>

                      <th>
                        Ref. No <br /> 交易参考
                      </th>

                      <th>
                        Buy <br /> 买入
                      </th>
                      <th>
                        Sell <br /> 卖出
                      </th>

                      <th>
                        Trade Price <br /> 卖出价
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      closedTable.map((dat) => {
                        return (
                          <tr className="hover">
                            <td>{dat.description}</td>
                            <td>{dat.open_order_date}</td>
                            <td>{dat.order_id_open}</td>
                            <td>MISSING</td>
                            <td>MISSING</td>
                            <td>{dat.price_open}</td>

                            <td>{dat.close_order_date}</td>
                            <td>{dat.order_id_close}</td>
                            <td>MISSING</td>
                            <td>MISSING</td>
                            <td>{dat.price_close}</td>
                            <td>{dat.ccy_trd}</td>
                            <td>{dat.trade_pl}</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="collapse collapse-plus ">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-custom-blue font-bold border-b-1 border-custom-blue">
              EXPIRED TRADE 到期合約
            </div>
            <div className="collapse-content  overflow-x-auto mt-2">
              <div className=" max-w-full">
                <table className="table table-zebra min-w-max">
                  {/* head */}
                  <thead className="font-bold">
                    <tr>
                      <th>
                        Trade Date <br /> 成交日期
                      </th>

                      <th>
                        Trade Ref. <br /> 交易参考
                      </th>
                      <th>
                        Description <br /> 描述
                      </th>
                      <th>
                        Expiry Date <br /> 結算種類
                      </th>

                      <th>
                        Buy <br /> 买入
                      </th>
                      <th>
                        Sell <br /> 卖出
                      </th>
                      <th>
                        Buy Price <br /> 买入价
                      </th>
                      <th>
                        Sell Price <br /> 卖出价
                      </th>

                      <th>
                        Currency <br /> 货币
                      </th>
                      <th>
                        Commission <br /> 佣金
                      </th>
                      <th>
                        Exch. Fee & Levy <br /> 交易费及征费
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      tradeTable.map((dat) => {
                        return (
                          <tr className="hover">
                            <td>{dat.trd_date}</td>
                            <td>{dat.ref}</td>
                            <td>{dat.description}</td>
                            <td>MISSING</td>
                            <td>MISSING</td>
                            <td>MISSING</td>

                            <td>MISSING</td>
                            <td>MISSING</td>

                            <td>{dat.ccy_trd}</td>
                            <td>{dat.comm}</td>
                            <td>{dat.levy}</td>
                          </tr>

                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="collapse collapse-plus ">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-custom-blue font-bold border-b-1 border-custom-blue">
              FUND MOVEMENT 資金流動
            </div>
            <div className="collapse-content  overflow-x-auto mt-2">
              <div className=" max-w-full">
                <table className="table table-zebra min-w-max">
                  {/* head */}
                  <thead className="font-bold">
                    <tr>
                      <th>
                        Trans. Code
                        <br /> 交易編號
                      </th>
                      <th>
                        Date <br /> 日期
                      </th>
                      <th>
                        Cheque No. <br /> 支票號碼
                      </th>
                      <th>
                        Description <br /> 內容
                      </th>
                      <th>
                        Currency <br /> 貨幣
                      </th>
                      <th>
                        Commission <br /> 佣金
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      tradeTable.map((dat) => {
                        return (
                          <tr className="hover">
                            <td>{dat.fv_id}</td>
                            <td>{dat.bus_date}</td>

                            <td>MISSING</td>
                            <td>{dat.description}</td>

                            <td>{dat.ccy_trd}</td>
                            <td>{dat.comm}</td>
                          </tr>

                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="collapse collapse-plus  ">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-custom-blue font-bold border-b-1  border-custom-blue">
              DAILY ACCOUNT SUMMARY 每日戶口總結
            </div>
            <div className="collapse-content  overflow-x-auto mt-2">
              <div className="flex justify-between items-center border-b-1 font-bold  border-custom-blue">
                <p className="flex flex-col">
                  <span>CCY</span>
                  <span> 貨幣</span>
                </p>
                <p className="flex flex-col">
                  <span>HKD</span>
                  <span> 港元</span>
                </p>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <p className="flex flex-col">
                  <span>Exchange Rate (HKD)</span>
                  <span> 對換匯率 (HKD)</span>
                </p>
                <p>1.000000</p>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <p className="flex flex-col">
                  <span>Open Balance</span>
                  <span> 承上結餘</span>
                </p>
                <p>0.00</p>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <p className="flex flex-col">
                  <span>Deposit/(Withdrawal)</span>
                  <span> 存款/提款</span>
                </p>
                <p>(798,000.00)</p>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <p className="flex flex-col">
                  <span>Commission</span>
                  <span>佣金支出</span>
                </p>
                <p>(340.00)</p>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <p className="flex flex-col">
                  <span>Exchange Fees & Levy</span>
                  <span> 交易費用</span>
                </p>
                <p>(61.62)</p>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <p className="flex flex-col">
                  <span>Option Premium</span>
                  <span> 期權金</span>
                </p>
                <p>0.00</p>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <p className="flex flex-col">
                  <span>Realized P/(L)</span>
                  <span> 平倉後盈/(虧)</span>
                </p>
                <p>230,400.00</p>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <p className="flex flex-col">
                  <span> Premium</span>
                  <span> 期權金</span>
                </p>
                <p>0.00</p>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <p className="flex flex-col">
                  <span> Cleared Not Yet Value</span>
                  <span> 到期已交割盈/(虧)</span>
                </p>
                <p>0.00</p>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <p className="flex flex-col">
                  <span> Floating P/(L)</span>
                  <span> 未平倉盈/(虧)</span>
                </p>
                <p>0.00</p>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <p className="flex flex-col">
                  <span> Total Equity</span>
                  <span> 總資產</span>
                </p>
                <p>(568,001.62)</p>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <p className="flex flex-col">
                  <span> Initial Margin</span>
                  <span> 基本保證金</span>
                </p>
                <p>0.00</p>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <p className="flex flex-col">
                  <span> Maintenance Margin</span>
                  <span> 維持保證金</span>
                </p>
                <p>0.00</p>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <p className="flex flex-col">
                  <span> Margin Excess/(Call)</span>
                  <span> 保證金剩餘/(不足)額</span>
                </p>
                <p>(568,001.62)</p>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <p className="flex flex-col">
                  <span> Margin Percentage(%)</span>
                  <span> 風險率(%)</span>
                </p>
                <p>0.00</p>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <p className="flex flex-col">
                  <span> Option Value</span>
                  <span> 期權價值</span>
                </p>
                <p>0.00</p>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <p className="flex flex-col">
                  <span> Net Asset Value(NAV)</span>
                  <span> 總資產淨值</span>
                </p>
                <p>(568,001.62)</p>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <p className="flex flex-col">
                  <span> (568,001.62)</span>
                  <span> (568,001.62)</span>
                </p>
                <p>(78.89)</p>
              </div>
              <hr />
            </div>
          </div>
          <div className="collapse collapse-plus ">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-custom-blue font-bold border-b-1 border-custom-blue">
              CONTRACT INFORMATION 合約資料
            </div>
            <div className="collapse-content  overflow-x-auto mt-2">
              <div className=" max-w-full">
                <table className="table table-zebra min-w-max">
                  {/* head */}
                  <thead className="font-bold">
                    <tr>
                      <th>
                        Exchange
                        <br /> 交易所
                      </th>
                      <th>
                        Commodity
                        <br /> 商品
                      </th>
                      <th>
                        Open Long <br />
                        長倉
                      </th>
                      <th>
                        Open Short <br /> 短倉
                      </th>
                      <th>
                        Contract Multiplier
                        <br /> 每一整點價值
                      </th>
                      <th>
                        Init.Margin / lot <br /> 基本保證金(每手)
                      </th>
                      <th>
                        Main.Margin/lot <br /> 維持保證金(每手)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr className="hover">
                      <td>
                        HKEX Hong Kong <br /> Futures Exchange
                      </td>
                      <td>
                        HSI Hang Seng <br /> Index OPT
                      </td>

                      <td>2.00</td>
                      <td>00</td>

                      <td>HKD 50.00 @PT</td>
                      <td>Per Span</td>
                      <td>Per Span</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
