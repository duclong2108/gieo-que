import tube from "./assets/image/tube.svg";
import mainTitle from "./assets/image/main_title.svg";
import mainSubTitle from "./assets/image/main_sub_title.svg";
import mainTitleSm from "./assets/image/sp/main_title.svg";
import mainSubTitleSm from "./assets/image/sp/main_sub_title.svg";
import hexagramBtn from "./assets/image/hexagram_btn.png";
import rewardImg from "./assets/image/reward_img.png";
import rewardVoucher from "./assets/image/reward_voucher.svg";
import "./assets/sass/App.scss";
import { useEffect, useMemo, useState } from "react";

function App() {
  const [view, setView] = useState(0);
  const [userName, setUserName] = useState("");
  const [treaty, setTreaty] = useState(0);
  const [currentId, setCurrentId] = useState(0);
  const listOptions = useMemo([
    {
      id: 1,
      text: "Tắt chuông báo thức",
      content: [
        `Dậy sớm là chuyện cả đời còn ngủ nướng thì chỉ có 1 mùa tết thôi nên mau cất gọn đồng hồ vào góc thôi`,
        `Một năm qua bạn đã chịu đựng nó đủ rồi, năm tiếp theo cũng cố gắng chịu tiếp nhé!!!`,
        `Quỹ Mão tới rồi ${userName.toUpperCase()} ơi, mau mau sắm thêm 10 cái đồng hồ nữa đi chứ không tắt thì bạn cũng có thức dậy đâuu`,
        `Làm vậy đủ rồi, tắt cái báo thức đi rồi mình làm 10 thùng bia`,
        `Chúng ta xứng đáng được tắt báo thức 7 ngày 7 đêm, nhưng tắt cả đời thì tỉnh táo lại đi`,
      ],
    },
    {
      id: 2,
      text: "Ăn không bao giờ mập",
      content: [
        `2023 năm nay - phát tài, phát lộc, phát luôn cả người yêu chứ không phát phì ${userName.toUpperCase()} nha!`,
        `Một dĩa cơm tấm full topping không làm ${userName.toUpperCase()} mập đâu, nên làm liền 10 dĩa cho đã cái nư đi nào`,
        `Chúc mừng bạn vì 2023 không phải 1 nhá mà là 2 cây giò 4 bánh trưng 3 gà luộc 2 nồi thịt kho một lượt luôn cũng không tăng tí cân nào`,
        `Bao lâu rồi ${userName.toUpperCase()} chưa được ăn một dĩa cơm tấm sườn bì chả ốp la chan nước mắm keo ly tái châu dịu meee thì ăn liền đi không mập đâu`,
        `Quý Mão sắp tới mà không làm liền 5 dĩa sườn bì chả trứng là chưa sám hối với bản thân mình vì đã nhịn đói bao lâu qua`,
      ],
    },
    {
      id: 3,
      text: 'Làm những dự định còn đang "để đó"',
      content: [
        `2023 của ${userName.toUpperCase()} sẽ có thật nhiều sức khoẻ, nhiều năng lượng để hoàn thành những dự định còn đang dang dở nhé`,
        `Làm điều mình thích và đặc biệt là phải thích điều mình làm nữa nha`,
        `Năm mới bạn có chí sẽ ăn phúc uống lộc sống thọ, còn làm được hay không thì tuỳ tâm`,
        `Kế hoạch 2023 sẽ bao gồm mang dâu rể về cho ba mẹ đó nha`,
        `Năm nay không làm được thì năm tới làm, năm tới không được thì năm kia, năm kia không được nữa thì bỏ đi chứ gì mà nhây quá`,
      ],
    },
    {
      id: 4,
      text: "Đi du lịch",
      content: [
        `Một năm qua ${userName.toUpperCase()}đã "chạy" không ngừng nghỉ rồi, bây giờ hãy "tản bộ" trên phần thưởng mà ${userName.toUpperCase()}xứng đáng nhé`,
        `Chuẩn bị đi du lịch thư giãn thôi ${userName.toUpperCase()}ơi, quậy cho đã rồi về mình làm lại từ đầu chứ có gì đâu`,
        `Lời khuyên cho 2023: Muốn đi nhanh thì đi một mình, muốn đi Đà Lạt thì bữa nào đi`,
        `Đi đâu không quan trọng, quan trọng là đi liền đi chứ hết tiền là khỏi đi`,
        `Đi Đà Lạt là xưa rồi, đi Bình Dương mới độc lạ`,
        `Quẻ này cho lời khuyên, là đi hỏi mấy đứa mà "bữa nào du lịch đi" á là có thật sự tới bữa đó của tụi bay chưa?`,
      ],
    },
    {
      id: 5,
      text: "Về nhà",
      content: [
        `Cảm ơn ${userName.toUpperCase()} vì những năm qua đã kiên trì cố gắng theo đuổi ước mơ của mình, nhưng cũng đừng quên ước mơ lớn nhất của ba mẹ chính là${userName.toUpperCase()} nè.`,
        `Mệt mỏi rồi đúng không? Vậy hãy dừng lại một chút và về nhà ${userName.toUpperCase()} nhé!`,
        `Bỏ lỡ dự án này cũng được, bỏ lỡ món quà kia cũng không sao chỉ mong bạn đừng bỏ lỡ chuyến xe cuối cùng.`,
        `Đi xa bao nhiêu cũng được, đi bao lâu cũng không sao nhưng phải nhớ đường về nhà ${userName.toUpperCase()} nhé`,
        `Vé về nhà /danh từ/: Chiếc vé đắt nhất mà bạn mua, chiếc vé mà tiền bạc đi đôi với may mắn và cũng là chiếc vé duy nhất mà bạn không muốn có khứ hồi`,
        `Nhớ mang tiền về cho mẹ chứ đừng "báo" nha`,
      ],
    },
    {
      id: 6,
      text: '"Tắt" công việc. Bật chế độ thuê bao với "công việc"',
      content: [
        `Mọi thể loại "ủa em, ủa anh, ủa chị, ủa cô, dì, chú, bác" sau giờ hành chính thì mình nên cho "thuê bao" nhé`,
        `Thử "tắt" với thế giới một ngày đi bạn sẽ thấy, chỉ có sếp là người luôn tìm kiếm bạn mãi thôiii`,
        `Tết đến nơi rồi nghỉ ngơi thôi nào bạn mình ơi, email sang năm trả lời cũng chưa muộn`,
        `Hôm nay là ngày mấy rồi mà còn đua deadline với áp KPI nữa ${userName.toUpperCase()} ơi, tầm này là phải đua nhau mua sắm với áp mã voucher thôi`,
        `Offline 7 ngày 7 đêm đi bạn ơi, online rồi mình làm 700 cái task thôi chứ có gì đâu mà stress`,
      ],
    },
    {
      id: 7,
      text: "Đánh đâu thắng đó",
      content: [
        `Ai rồi cũng bị chặt heo thôi không sớm thì muộn, không kiếp này thì kiếp sau, bạn cũng vậy ahihi`,
        `Vui cũng được, buồn cũng được, tết này đừng đánh bài thua là được`,
        `Tết Quý Mão của ${userName.toUpperCase()}: heo xuống thì chặt, hai mươi thì xì dách mà chín nút thì ba tiên á nhaaa`,
        `Quý Mão là năm may mắn của ${userName.toUpperCase()}, tứ quý mở màn xì dách theo sau còn chín nút ba tiên thì lật kèo`,
        `Bé ${userName.toUpperCase()} đó dễ thương .Mắt nó đẹp nhưng lé .Nội sợ nó nhìn bài người ta nên nó thắng hoài`,
        `Ngoại nói , đời người có 2 thứ không được bỏ lỡ 1 là chuyến xe về nhà cuối cùng hai là cơ hội để ${userName.toUpperCase()} chặt heo`,
        `Ôi trời đất ơi , bạn biết gì chưa, ${userName.toUpperCase()} bị chặt heo rồi`,
        `Lời khuyên 2023: Muốn ngồi ở vị trí không ai ngồi được thì ngồi chặt heo`,
        `Tết này hỏng giống xuân xưa , nay ${userName.toUpperCase()} thì thích chặt , đứa ngồi cạnh luôn đè heo`,
        `Dự đoán 2023 củ a${userName.toUpperCase()}: đỏ tình đỏ luôn cả bạc, đặt đâu thắng đó, mạnh dạn chặt đứt con heo đứa kế bên đi nào`,
      ],
    },
    {
      id: 8,
      text: "Lên bia",
      content: [
        `Mồi ngon thì phải có bạn hiền, mà đã có bạn hiền thì làm sao thiếu 10 thùng bia được`,
        `Bạn tốt là ép bạn nhậu được thì đưa bạn về được, chứ đừng có "chạy xe cẩn thận" dùm đi`,
        `Mấy đứa mà đang uống được 2,3 lon cái đòi về á là nghỉ chơi liền đi chứ bạn bè không ai làm vậy hết `,
        `Ở công ty là đồng nghiệp, trên bàn nhậu là chiến hữu, cầm cái ly lên rồi nói chuyện tiếp`,
        `Muốn đi nhanh thì đi một mình, muốn đi nhậu thì mấy giờ, ở đâu, bao nhiêu đứa?`,
        `Lúc mới nhậu bảo mình không biết uống, uống vài chai lại bảo "tui không say" ${userName.toUpperCase()} sẽ "Em nói thật với sếp lâu giờ em không dám nói nên nay em xin mượn cồn..."`,
        `Trời ơi say vô đừng có gọi cho người yêu cũ nữa, gọi Crush đón về thì được!!`,
        `Chưa uống thì 1 dạ 2 vâng, uống vào là khoác vai sếp mà nói "Không ý gì đâu nhưng mà..."`,
      ],
    },
    {
      id: 9,
      text: "Ôm và được ôm",
      content: [
        `2023 năm nay ${userName.toUpperCase()} sẽ được ăn bữa cơm mẹ nấu, được ôm mẹ thật chặt và nói con yêu mẹ`,
        `2023 năm nay ${userName.toUpperCase()} sẽ được ba chở đi đây đi đó ngắm phố phường, được ôm ba thật chặt và nói con yêu ba`,
        `Hãy ôm người bên trái một cái và nói rằng "1 năm qua bạn đã vất vả rồi"`,
        `Dù lạ hay quen, đã có duyên gặp nhau thì đừng ngại trao cho nhau một cái ôm bạn nhé`,
        `Những cái ôm đôi khi cần thiết hơn là lời nói và những câu hỏi sáo rỗng`,
      ],
    },
    {
      id: 10,
      text: "Mua sắm không cần nhìn giá",
      content: [
        `Một năm trầy trật làm việc đủ rồi, đến lúc mua sắm và tân trang lại nhan sắc thôi bạn mình ơi`,
        `Lương thưởng cuối năm cứ phải gọi là tới tấp mãi thôiiii`,
        `Mua sắm thì ai cũng thích nhưng riêng ${userName.toUpperCase()} thì năm nay mua sắm không cần nhìn giá nha`,
        `2023 của ${userName.toUpperCase()} : công việc thuận lợi, lương thưởng đều đều, thích cái gì sắm cái đó, sắm cho đã cái nư vẫn còn dư nhaa`,
        `Sếp hứa hồng bao năm nay sẽ cực kì nặng, mua sắm thả ga sếp lo hết`,
      ],
    },
    {
      id: 11,
      text: "Hưởng lương tháng 16",
      content: [
        `Năm mới rồi, thực tế lên nào ${userName.toUpperCase()} ơi`,
        `${userName.toUpperCase()} sau này có tất cả nhưng không có lương tháng 13`,
        `Tại thế giời song song , ${userName.toUpperCase()} được thưởng lương tháng 31`,
        `${userName.toUpperCase()} có lương tháng 12 đã là vui lắm rồi, đừng mong gì hơn`,
        `Đẹp cũng được , xấu cũng được , mặp cũng được , có lương tháng 13 là được `,
      ],
    },
    {
      id: 12,
      text: "Nhuộm tóc",
      content: [
        `Bộ tóc chưa đủ rụng hay gì mà còn nhuộm nữa`,
        `Nhuộm cho tâm trí mình trắng sáng tinh khôi rồi làm gì làm nha`,
        `Nhuộm tóc giờ cũng rẻ lắm có mấy trăm thôi đừng tự nhuộm nữa nhé ăn tết mất ngon đấy`,
      ],
    },
    {
      id: 13,
      text: "Nhận lì xì",
      content: [
        `Lì xì không tự nhiên mất đi chỉ chuyển từ sòng này đến sòng khác `,
        `Lì xì của 9x năm nay : "cái nịt"`,
        `Tết là thời điểm chỉ có 2 loại người "lì xì'' và ''được lì xì''`,
        `Độc lạ Quý Mão , giao thừa ${userName.toUpperCase()} nhận ngay lì xì thì nhỏ bạn thân `,
        `Nhắn tin chúc mừng năm mới người yêu cũ, vừa thật tử tế không để bụng, vừa được nhận lì xì`,
        `"Em trai/gái" - phụ kiện đính kèm để tăng sản lượng lì xì năm nay `,
        `Trong các loại cây mình thích nhất là cây vàng`,
      ],
    },
    {
      id: 14,
      text: "Ở nhà cả ngày",
      content: [
        `${userName.toUpperCase()} là một người đang hướng nội thì đến tết`,
        `2023, ${userName.toUpperCase()} đã có dấu hiệu của người trưởng thành`,
        `Hà cớ gì mà phải có một người tối ngày bên cạnh "không hiểu mình" cơ chứ`,
        `"Em làm gì đã mua đồ tết . Em định mặc đồ năm ngoái đây này "`,
      ],
    },
    {
      id: 15,
      text: "Có người yêu",
      content: [
        `${userName.toUpperCase()} bị yếu tiếng Trung vì "Trúng tiếng yêu" `,
        `KPI từ sếp thì dễ nản nhưng KPI có người yêu thì rất kiên trì để đạt nhỉ`,
        `May cho ${userName.toUpperCase()} là độc thân đó nếu không là tết này phải đi chơi với người yêu rồi`,
        `Đừng buồn vì tết này bạn chưa có người yêu, vì có khi tết năm sau năm sau nữa cũng chưa chắc có đâu`,
        `Noel đã không có người yêu rồi thì tết cũng không kịp đâu.`,
      ],
    },
    {
      id: 16,
      text: 'Chủ nợ nhắn "coi như lì xì em"',
      content: [
        `Chụp ngay gửi chủ nợ, để họ biết họ là một "đấng cứu thế" của nhân loại`,
        `Cái gì 0 đồng cũng thích, chẳng hạn như nợ còn 0 đồng`,
        `Chủ nợ của ${userName.toUpperCase()} như miếng chả vậy, chả có gì để chê cả`,
      ],
    },
  ]);
  const [content, setContent] = useState([]);

  useEffect(() => {
    if (treaty) {
      const arrayContent = listOptions[treaty - 1]?.content;
      const randomElement =
        arrayContent[Math.floor(Math.random() * arrayContent.length)];
      console.log("arrayContent", arrayContent);
      setContent(randomElement);
      setCurrentId(
        (arrayContent.indexOf(randomElement) + 1).toString().padStart(2, "0")
      );
    }
  }, [treaty, listOptions]);

  const handleBtnClick = () => {
    if (userName === "") {
      return;
    }

    setView(1);
  };

  const handleOptionClick = (id) => {
    console.log("id", id);
    setTreaty(id);
    setView(2);
  };

  return (
    <div className={`container ${view >= 3 && "background-blur"}`}>
      <div className="container-flower">
        <div className="flower-group">
          <span className="icon-flower"></span>
          <span className="icon-flower is-small"></span>
          <span className="icon-flower"></span>
          <span className="icon-flower is-small"></span>
          <span className="icon-flower is-small"></span>
          <span className="icon-flower"></span>
          <span className="icon-flower is-small"></span>
          <span className="icon-flower"></span>
          <span className="icon-flower is-small"></span>
          <span className="icon-flower"></span>
        </div>
      </div>
      <section className="section-main">
        <div className="wrapper">
          {(view === 2 || view === 3) && (
            <picture className="main-title">
              <source media="(min-width: 768px)" srcSet={mainTitle} />
              <img
                src={mainTitleSm}
                alt="GIEO QUẺ ĐẦU NĂM"
                draggable={false}
                loading="lazy"
              />
            </picture>
          )}
          {view === 2 && (
            <picture onClick={() => setView(3)} className="main-sub-title">
              <source media="(min-width: 768px)" srcSet={mainSubTitle} />
              <img
                src={mainSubTitleSm}
                alt="CHẠM ĐỂ GIEO QUẺ"
                draggable={false}
                loading="lazy"
              />
            </picture>
          )}
          <div
            onClick={() => setView(3)}
            className={`main-image ${
              view === 0 || view === 1 ? "is-left" : ""
            } ${view === 2 && "start-animation"}`}
          >
            <img src={tube} className="" alt="Ống quẻ" />
          </div>
          {(view === 0 || view === 1) && (
            <div className="main-content">
              <div className="content-inner">
                {view === 0 && (
                  <>
                    <h2 className="font-cubano content-title">
                      Tên người <br />
                      được gieo quẻ
                    </h2>
                    <div className="content-input">
                      <input
                        className="content-input font-cubano"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                      ></input>
                      <button
                        className="content-button"
                        onClick={handleBtnClick}
                      >
                        Tiếp nào &gt;
                      </button>
                    </div>
                  </>
                )}
                {view === 1 && (
                  <>
                    <h2 className="font-cubano content-title">
                      NẾU ĐƯỢC CHỌN 1 ĐIỀU ĐỂ LÀM TRONG DỊP TẾT THÌ BẠN SẼ LÀM
                      GÌ?
                    </h2>
                    <ul className="content-list">
                      {listOptions.map((option) => {
                        const { id, text } = option;
                        return (
                          <li key={id} onClick={() => handleOptionClick(id)}>
                            {text}
                          </li>
                        );
                      })}
                    </ul>
                  </>
                )}
              </div>
            </div>
          )}
          <div className={`hexagram-block ${view >= 3 && "show"}`}>
            {view === 3 && (
              <>
                <h2 className="hexagram-title font-ong-do">
                  Quẻ số {currentId}
                </h2>
                <p className="hexagram-text">{content}</p>
                <div className="hexagram-btn" onClick={() => setView(4)}>
                  <img src={hexagramBtn} alt="RÚT BAO LÌ XÌ TẠI ĐÂY" />
                </div>
              </>
            )}
            <div className={`reward-block ${view === 4 && "show"}`}>
              <div className="reward-image-top"></div>
              <div className="reward-image">
                <img src={rewardImg} className="" alt="Bao lì xì" />
              </div>
              <div className="reward-voucher">
                <img src={rewardVoucher} className="" alt="Bao lì xì" />
              </div>
              <div className="reward-content">
                <ul className="reward-list">
                  <li>
                    - Giảm 20.000đ khi mua cơm tấm sườn nhỏ hoặc cơm tấm sườn
                    vừa cùng với Coca-cola tươi và canh rong biển.
                  </li>
                  <li>- 01 phiếu quà tặng chỉ áp dụng cho 01 hóa đơn.</li>
                  <li>
                    - Áp dụng cho khách hàng dùng tại chỗ hoặc mua mang về.
                  </li>
                  <li>
                    - Không áp dụng đồng thời các chương trình khuyến mãi khác.
                  </li>
                  <li>
                    - Phiếu quà tặng không có giá trị quy đổi thành tiền mặt.
                  </li>
                  <li>
                    - Phiếu quà tặng áp dụng còn nguyên vẹn không rách hoặc mất
                    nội dung.
                  </li>
                </ul>
                <p className="reward-warning">
                  Đừng quên chụp lại màn hình để lưu voucher
                  <span>Voucher sẽ không hiện lại khi thoát trình duyệt</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
