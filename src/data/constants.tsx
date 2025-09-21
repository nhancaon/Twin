import { Target, TrendingUp, Award, Gift, Users, Globe, Star } from "lucide-react";
import images from "../assets";

export const prizes = [
  {
    icon: <Gift className="w-12 h-12 text-yellow-500" />,
    title: "Giải thưởng tài chính",
    description: "Giải thưởng với tổng giá trị tiền mặt lên đến xx triệu đồng tiền mặt cho doanh nghiệp chiến thắng",
  },
  {
    icon: <Users className="w-12 h-12 text-blue-500" />,
    title: "Hỗ trợ kỹ thuật chuyên sâu",
    description: "Hỗ trợ kỹ thuật chuyên sâu từ dự án Twin Transition Hub (TTH) cho Top 5 doanh nghiệp xuất sắc nhất",
  },
  {
    icon: <Globe className="w-12 h-12 text-green-500" />,
    title: "Chứng nhận thành tích",
    description: "Giấy chứng nhận ghi nhận thành tích chuyển đổi kép",
  },
  {
    icon: <Star className="w-12 h-12 text-purple-500" />,
    title: "Cơ hội khẳng định vị thế",
    description: "Gia tăng uy tín, tạo dấu ấn với khách hàng và nhà đầu tư",
  },
];

export const faqs = [
  {
    question: "Doanh nghiệp cần chuẩn bị những hồ sơ gì để đăng ký tham gia?",
    intro: "Doanh nghiệp cần điền thông tin theo mẫu và chuẩn bị tài liệu bao gồm:",
    answer: [
      "Giới thiệu doanh nghiệp",
      "Giới thiệu về sáng kiến chuyển đổi xanh và số của doanh nghiệp",
      "Tác động của các sáng kiến",
    ],
  },
  {
    question: "Twin Transition Challenge đánh giá và lựa chọn doanh nghiệp dựa trên những tiêu chí nào?",
    intro: "Hội đồng đánh giá sẽ căn cứ vào các tiêu chí sau đây để đánh giá và lựa chọn các doanh nghiệp",
    answer:
      [
        "Mức độ triển khai/ tích hợp chuyển đổi kép trong hoạt động kinh doanh hiện tại",
        "Tác động của sáng kiến",
        "Mức độ đổi mới sáng tạo",
        "Tính khả thi và mức độ sẵn sàng",
        "Khả năng mở rộng và nhân rộng",
        "Tính bền vững về tài chính",
        "Cam kết của đội ngũ/ Tầm nhìn và năng lực lãnh đạo",
        "Sự phù hợp với chính sách quốc gia/ khu vực",
      ],
  },
  {
    question: "Ngôn ngữ sử dụng trong chương trình?",
    intro:
      "Chương trình được thực hiện bằng tiếng Việt.",
  },
];

export const rawTimeline = [
  {
    phase: "Giai đoạn 1",
    title: "Mở đơn đăng ký và nộp hồ sơ dự án",
    date: "24/09/2025 - 04/10/2025",
    description: "Các doanh nghiệp sẽ hoàn thiện và gửi hồ sơ dự án chuyển đổi kép (xanh & số) theo hướng dẫn.",
  },
  {
    phase: "Giai đoạn 2",
    title: "Phiên thông tin trực tuyến (Online Information Session)",
    date: "25/09/2025",
    description: "Ban tổ chức tổ chức buổi chia sẻ trực tuyến nhằm giới thiệu chi tiết về mục tiêu, thể lệ và tiêu chí đánh giá cuộc thi. SMEs sẽ được hướng dẫn cách chuẩn bị hồ sơ, đồng thời giải đáp thắc mắc trực tiếp từ ban tổ chức.",
  },
  {
    phase: "Giai đoạn 3",
    title: "Công bố kết quả vòng hồ sơ",
    date: "9/10/2025",
    description: "Công bố danh sách Top 3-5 doanh nghiệp từ mỗi lĩnh vực.",
  },
  {
    phase: "Giai đoạn 4",
    title: "Phiên định hướng & hoạt động mentoring",
    date: "10/10/2025 - 20/10/2025",
    description: "Các doanh nghiệp lọt vào danh sách sẽ nhận phản hồi và hướng dẫn để chuẩn bị cho giai đoạn huấn luyện và pitching",
  },
  {
    phase: "Giai đoạn 5",
    title: "Sự kiện cao điểm",
    date: "22/10/2025",
    description: "Twin Transition Growth Forum & Chung kết thuyết trình trước Hội đồng đánh giá",
  },
];

export const industries = [
  { value: "food-processing", label: "Chế biến nông sản", image: images.agri },
  { value: "textile", label: "Dệt may", image: images.silk },
  { value: "wood-paper", label: "Gỗ và giấy", image: images.wood },
];