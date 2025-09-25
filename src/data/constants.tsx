import { Gift, Star, Handshake, Cpu, BookOpenCheck } from "lucide-react";
import images from "../assets";

export const prizes = [
  {
    icon: <Gift className="w-12 h-12 text-yellow-300" />,
    title: "Giải thưởng",
    description: (
      <div>
        <ul className="list-disc ml-2">
          <li>Champion: 150.000.000</li>
          <li>Á quân: 50.000.000</li>
          <li>SMEs pitching: 4 x 40.000.000</li>
        </ul>
      </div>
    ),
  },
  {
    icon: <Cpu className="w-12 h-12 text-cyan-300" />,
    title: "Hỗ trợ kỹ thuật chuyên sâu",
    description: "Hỗ trợ kỹ thuật chuyên sâu từ các hoạt động của Trung tâm chuyển đổi kép - TTH",
  },
  {
    icon: <BookOpenCheck className="w-12 h-12 text-orange-400" />,
    title: "Đào tạo",
    description: "Hỗ trợ để được ưu tiên lựa chọn nhận khóa đào tạo và tư vấn về chuyển đổi số trong năm 2025 từ ngân sách nhà nước (giá trị tư vấn 100tr đồng và đối ứng 100 triệu đồng, giá trị đào tạo khoảng 70 triệu đồng/một doanh nghiệp)",
  },
  {
    icon: <Star className="w-12 h-12 text-purple-400" />,
    title: "Uy tín & hình ảnh",
    description: "Cơ hội gia tăng giá trị thương hiệu, mở rộng mạng lưới đối tác và hợp tác lâu dài",
  },
  {
    icon: <Handshake className="w-12 h-12 text-green-400" />,
    title: "Cơ hội kết nối",
    description: "Kết nối và tư vấn trực tiếp với các chuyên gia hàng đầu trong lĩnh vực xanh & số hóa",
  },
];

export const faqs = [
  {
    question: "Doanh nghiệp cần chuẩn bị những hồ sơ gì để đăng ký tham gia?",
    intro: "Doanh nghiệp cần điền thông tin theo mẫu và chuẩn bị tài liệu (bản trình bày, video) bao gồm các thông tin:",
    answer: [
      {
        title: "Giới thiệu doanh nghiệp",
      },
      {
        title: "Mô hình doanh nghiệp",
      },
      {
        title: "Giới thiệu về mô hình chuyển đổi xanh và số của doanh nghiệp",
        subAnswer: [
          "Hiện trạng",
          "Xác định vấn đề",
          "Mô hình chuyển đổi xanh và số",
          "Kết quả/ tác động dự kiến (liên quan đến tài nguyên, năng lượng, phát thải carbon)",
          "Kế hoạch trong 3 năm tới: Bao gồm các mốc thời gian cụ thể và các nguồn lực sử dụng",
        ]
      },
      {
        title: "Tác động đo lường được của mô hình: Có thể là tác động thực tế hoặc dự kiến",
      },
    ]
  },
  {
    question: "Ngôn ngữ sử dụng trong chương trình?",
    intro:
      "Tiếng Việt là ngôn ngữ được sử dụng xuyên suốt trong các hoạt động của chương trình",
  },
  {
    question: "Sáng kiến mới ở giai đoạn ý tưởng có được tham gia không?",
    intro:
      "Hiện tại, chương trình chỉ nhận các mô hình đã hoặc đang triển khai với tác động (dự kiến/thực tế) đo lường được.",
  },
  {
    question: "Doanh nghiệp ở xa có được hỗ trợ chi phí đi lại?",
    intro:
      "Các doanh nghiệp lọt vào Top 6 chung kết sẽ được BTC hỗ trợ chi phí đi lại và lưu trú để tham dự sự kiện pitching trực tiếp tại TP.HCM. Chi tiết mức hỗ trợ sẽ được thông báo tới các doanh nghiệp.",
  },
  {
    question: "Hỗ trợ kỹ thuật từ các hoạt động của Trung tâm chuyển đổi kép - TTH bao gồm những gì?",
    intro: "Các hoạt động của Trung tâm chuyển đổi kép - TTH được triển khai theo lộ trình dự kiến như sau:",
    answer:
      [
        "Đào tạo quản lý dữ liệu vận hành [Dự kiến: Tháng 11/2025 – Tháng 2/2026]",
        "Huấn luyện 1:1 về hạ tầng dữ liệu và báo cáo [Dự kiến: Tháng 11/2025 – Tháng 2/2026]",
        "[Ưu tiên] Huấn luyện 1:1 về phát triển kế hoạch hành động [Dự kiến: Tháng 1/2026 – Tháng 4/2026]",
      ],
  },

];

export const rawTimeline = [
  {
    phase: "Giai đoạn 1",
    title: "Vòng nộp đơn",
    date: "25/09/2025 - 08/10/2025",
    description: "Các doanh nghiệp sẽ hoàn thiện và gửi hồ sơ dự án chuyển đổi kép theo hướng dẫn.",
  },
  {
    phase: "Giai đoạn 2",
    title: "Phiên thông tin trực tuyến (Online Information Session)",
    date: "26/09/2025",
    description: "Giới thiệu chi tiết về mục tiêu, thể lệ và tiêu chí đánh giá cuộc thi. SMEs sẽ được hướng dẫn cách chuẩn bị hồ sơ, đồng thời giải đáp thắc mắc trực tiếp từ BTC.",
  },
  {
    phase: "Giai đoạn 3",
    title: "Công bố kết quả vòng đơn",
    date: "12/10/2025",
    description: "Danh sách Top 3-5 doanh nghiệp/ lĩnh vực.",
  },
  {
    phase: "Giai đoạn 4",
    title: "Phiên định hướng & hoạt động mentoring 1-1",
    date: "13/10/2025 - 20/10/2025",
    description: "Các doanh nghiệp lọt vào danh sách sẽ nhận phản hồi và hướng dẫn để chuẩn bị cho bài pitching.",
  },
  {
    phase: "Giai đoạn 5",
    title: "Vòng thi Pitching",
    date: "22/10/2025",
    description: "Top 6 doanh nghiệp trực tiếp trình bày trước hội đồng đánh giá",
  },
];

export const industries = [
  { value: "food-processing", label: "Chế biến nông sản", image: images.agri },
  { value: "textile", label: "Dệt may", image: images.silk },
  { value: "wood-paper", label: "Gỗ và giấy", image: images.wood },
];