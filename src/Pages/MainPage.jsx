const MainPage = () => {
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
              <div className="collapse-title text-custom-blue font-bold border-b-2 border-w border-custom-blue">
                ACCOUNT INFORMATION 帳戶資料
              </div>
              <div className="collapse-content mt-2">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-plus ">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-custom-blue font-bold border-b-2 border-custom-blue">
                TRADE CONFIRMATION 成交確認
              </div>
              <div className="collapse-content mt-2">
                <p>hello</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    );
};
export default MainPage;
