import { Target, TrendingUp, Award, Gift, Users, Globe, Star } from "lucide-react";

export const challenges = [
  {
    title: "SMEs hiện tại",
    items: [
      "Thiếu dữ liệu và thông tin",
      "Hạn chế về nguồn lực tài chính",
      "Công nghệ lạc hậu",
      "Thiếu kỹ năng số",
      "Tác động môi trường cao",
    ],
    color: "text-red-600 bg-red-50",
  },
  {
    title: "SMEs sau Twin Transition",
    items: [
      "Dữ liệu thông minh và phân tích",
      "Tối ưu hóa chi phí vận hành",
      "Công nghệ tiên tiến",
      "Nhân lực có kỹ năng cao",
      "Hoạt động bền vững",
    ],
    color: "text-green-600 bg-green-50",
  },
];

export const benefits = [
  {
    icon: <Target className="w-8 h-8 text-blue-500" />,
    title: "Xây dựng năng lực sáng kiến",
    description: "Phát triển tư duy đổi mới và khả năng tạo ra giải pháp sáng tạo",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-green-500" />,
    title: "Thu hút đầu tư",
    description: "Tăng khả năng tiếp cận nguồn vốn và đối tác chiến lược",
  },
  {
    icon: <Award className="w-8 h-8 text-purple-500" />,
    title: "Nâng cao năng lực cạnh tranh",
    description: "Tăng cường vị thế trên thị trường và mở rộng cơ hội kinh doanh",
  },
];

export const prizes = [
  {
    icon: <Gift className="w-12 h-12 text-yellow-500" />,
    title: "Tài trợ phát triển",
    description: "Hỗ trợ tài chính để thực hiện ý tưởng Twin Transition",
  },
  {
    icon: <Users className="w-12 h-12 text-blue-500" />,
    title: "Mentoring dài hạn",
    description: "Đồng hành cùng chuyên gia trong quá trình phát triển",
  },
  {
    icon: <Globe className="w-12 h-12 text-green-500" />,
    title: "Cơ hội hợp tác quốc tế",
    description: "Kết nối với mạng lưới đối tác toàn cầu",
  },
  {
    icon: <Star className="w-12 h-12 text-purple-500" />,
    title: "Truyền thông rộng rãi",
    description: "Quảng bá thương hiệu và câu chuyện thành công",
  },
];

export const faqs = [
  {
    question: "SMEs nào đủ điều kiện tham gia?",
    answer:
      "Các doanh nghiệp vừa và nhỏ hoạt động trong 3 lĩnh vực: Chế biến nông sản, Dệt may, Gỗ và giấy. Doanh nghiệp cần có từ 10-200 nhân viên và đã hoạt động ít nhất 2 năm.",
  },
  {
    question: "Có phí tham gia không?",
    answer:
      "Hoàn toàn miễn phí! Tất cả các hoạt động bao gồm mentoring, training và tham gia sự kiện đều được tài trợ bởi dự án.",
  },
  {
    question: "Ngôn ngữ sử dụng trong chương trình?",
    answer:
      "Chương trình được thực hiện bằng tiếng Việt với sự hỗ trợ của chuyên gia quốc tế. Tài liệu sẽ có cả tiếng Việt và tiếng Anh.",
  },
  {
    question: "Quy trình tuyển chọn diễn ra như thế nào?",
    answer:
      "Sau khi đăng ký, ban tổ chức sẽ đánh giá hồ sơ dựa trên tiềm năng phát triển, tính khả thi của ý tưởng và cam kết tham gia. Kết quả sẽ được thông báo qua email.",
  },
  {
    question: "Doanh nghiệp sẽ nhận được hỗ trợ gì?",
    answer:
      "Bao gồm: mentoring 1-1, tài liệu hướng dẫn, cơ hội networking, tham gia sự kiện chuyên môn và có thể nhận tài trợ phát triển nếu thắng cuộc.",
  },
];

export const rawTimeline = [
  {
    phase: "Giai đoạn 1",
    title: "Application & Scouting SMEs",
    date: "17/9/2025",
    description: "Đăng ký tham gia và sàng lọc doanh nghiệp",
  },
  {
    phase: "Giai đoạn 2",
    title: "Tuyển chọn & Mentoring",
    date: "06/10/2025 - 15/10/2025",
    description: "Lựa chọn SMEs và hướng dẫn chuyên sâu",
  },
  {
    phase: "Giai đoạn 3",
    title: "Growth Forum & Pitching",
    date: "22/10/2025",
    description: "Diễn đàn phát triển và cuộc thi thuyết trình",
  },
  {
    phase: "Giai đoạn 4",
    title: "Báo cáo & Truyền thông",
    date: "23/10/2025 - 28/10/2025",
    description: "Tổng kết và lan tỏa kết quả",
  },
];

export const industries = [
  { value: "food-processing", label: "Chế biến nông sản" },
  { value: "textile", label: "Dệt may" },
  { value: "wood-paper", label: "Gỗ và giấy" },
];