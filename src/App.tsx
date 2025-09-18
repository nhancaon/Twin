import React, { useState } from 'react';
import {
  ChevronRight, Leaf, Cpu, Users, Trophy, Mail, Phone, Building, User,
  ArrowRight, CheckCircle, Play, Award, Target, Globe, TrendingUp,
  ChevronDown, Star, Gift
} from 'lucide-react';

interface FormData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  industry: string;
  employeeCount: string;
  businessDescription: string;
  currentChallenges: string;
  twinTransitionIdeas: string;
}

function App() {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    industry: '',
    employeeCount: '',
    businessDescription: '',
    currentChallenges: '',
    twinTransitionIdeas: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const industries = [
    { value: 'food-processing', label: 'Chế biến nông sản' },
    { value: 'textile', label: 'Dệt may' },
    { value: 'wood-paper', label: 'Gỗ và giấy' }
  ];

  const getTimelineStatus = (dateString: string) => {
    const currentDate = new Date();
    const dateParts = dateString.split(' ')[0].split('/');
    let eventDate: Date;

    if (dateParts.length === 3) { // Format DD/MM/YYYY
      const day = parseInt(dateParts[0]);
      const month = parseInt(dateParts[1]) - 1; // Month is 0-indexed
      const year = parseInt(dateParts[2]);
      eventDate = new Date(year, month, day);
    } else if (dateParts.length === 2) { // Format MM/YYYY (for ranges like 06/10)
      const month = parseInt(dateParts[0]) - 1;
      const year = parseInt(dateParts[1]);
      eventDate = new Date(year, month, 1); // Assume start of month for comparison
    } else {
      return 'upcoming'; // Default for unrecognized date formats
    }

    // For ranges, we assume it's active if current date is within the range or past the start
    if (dateString.includes('-')) {
      const [startDateStr, endDateStr] = dateString.split(' - ');
      const startDateParts = startDateStr.split('/');
      const endDateParts = endDateStr.split(' ')[0].split('/');

      const startDay = parseInt(startDateParts[0]);
      const startMonth = parseInt(startDateParts[1]) - 1;
      const startYear = parseInt(startDateParts[2] || currentDate.getFullYear().toString());
      const startDate = new Date(startYear, startMonth, startDay);

      const endDay = parseInt(endDateParts[0]);
      const endMonth = parseInt(endDateParts[1]) - 1;
      const endYear = parseInt(endDateParts[2] || currentDate.getFullYear().toString());
      const endDate = new Date(endYear, endMonth, endDay);

      if (currentDate >= startDate && currentDate <= endDate) {
        return 'active';
      } else if (currentDate > endDate) {
        return 'completed';
      } else {
        return 'upcoming';
      }
    } else { // Single date event
      if (currentDate.toDateString() === eventDate.toDateString()) {
        return 'active';
      } else if (currentDate > eventDate) {
        return 'completed';
      } else {
        return 'upcoming';
      }
    }
  };

  const rawTimeline = [
    {
      phase: "Giai đoạn 1",
      title: "Application & Scouting SMEs",
      date: "17/9/2025",
      description: "Đăng ký tham gia và sàng lọc doanh nghiệp"
    },
    {
      phase: "Giai đoạn 2",
      title: "Tuyển chọn & Mentoring",
      date: "06/10/2025 - 15/10/2025",
      description: "Lựa chọn SMEs và hướng dẫn chuyên sâu"
    },
    {
      phase: "Giai đoạn 3",
      title: "Growth Forum & Pitching",
      date: "22/10/2025",
      description: "Diễn đàn phát triển và cuộc thi thuyết trình"
    },
    {
      phase: "Giai đoạn 4",
      title: "Báo cáo & Truyền thông",
      date: "23/10/2025 - 28/10/2025",
      description: "Tổng kết và lan tỏa kết quả"
    }
  ];

  const timeline = rawTimeline.map(item => ({
    ...item,
    status: getTimelineStatus(item.date)
  }));

  const challenges = [
    {
      title: "SMEs hiện tại",
      items: [
        "Thiếu dữ liệu và thông tin",
        "Hạn chế về nguồn lực tài chính",
        "Công nghệ lạc hậu",
        "Thiếu kỹ năng số",
        "Tác động môi trường cao"
      ],
      color: "text-red-600 bg-red-50"
    },
    {
      title: "SMEs sau Twin Transition",
      items: [
        "Dữ liệu thông minh và phân tích",
        "Tối ưu hóa chi phí vận hành",
        "Công nghệ tiên tiến",
        "Nhân lực có kỹ năng cao",
        "Hoạt động bền vững"
      ],
      color: "text-green-600 bg-green-50"
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: "Xây dựng năng lực sáng kiến",
      description: "Phát triển tư duy đổi mới và khả năng tạo ra giải pháp sáng tạo"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: "Thu hút đầu tư",
      description: "Tăng khả năng tiếp cận nguồn vốn và đối tác chiến lược"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      title: "Nâng cao năng lực cạnh tranh",
      description: "Tăng cường vị thế trên thị trường và mở rộng cơ hội kinh doanh"
    }
  ];

  const prizes = [
    {
      icon: <Gift className="w-12 h-12 text-yellow-500" />,
      title: "Tài trợ phát triển",
      description: "Hỗ trợ tài chính để thực hiện ý tưởng Twin Transition"
    },
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: "Mentoring dài hạn",
      description: "Đồng hành cùng chuyên gia trong quá trình phát triển"
    },
    {
      icon: <Globe className="w-12 h-12 text-green-500" />,
      title: "Cơ hội hợp tác quốc tế",
      description: "Kết nối với mạng lưới đối tác toàn cầu"
    },
    {
      icon: <Star className="w-12 h-12 text-purple-500" />,
      title: "Truyền thông rộng rãi",
      description: "Quảng bá thương hiệu và câu chuyện thành công"
    }
  ];

  const faqs = [
    {
      question: "SMEs nào đủ điều kiện tham gia?",
      answer: "Các doanh nghiệp vừa và nhỏ hoạt động trong 3 lĩnh vực: Chế biến nông sản, Dệt may, Gỗ và giấy. Doanh nghiệp cần có từ 10-200 nhân viên và đã hoạt động ít nhất 2 năm."
    },
    {
      question: "Có phí tham gia không?",
      answer: "Hoàn toàn miễn phí! Tất cả các hoạt động bao gồm mentoring, training và tham gia sự kiện đều được tài trợ bởi dự án."
    },
    {
      question: "Ngôn ngữ sử dụng trong chương trình?",
      answer: "Chương trình được thực hiện bằng tiếng Việt với sự hỗ trợ của chuyên gia quốc tế. Tài liệu sẽ có cả tiếng Việt và tiếng Anh."
    },
    {
      question: "Quy trình tuyển chọn diễn ra như thế nào?",
      answer: "Sau khi đăng ký, ban tổ chức sẽ đánh giá hồ sơ dựa trên tiềm năng phát triển, tính khả thi của ý tưởng và cam kết tham gia. Kết quả sẽ được thông báo qua email."
    },
    {
      question: "Doanh nghiệp sẽ nhận được hỗ trợ gì?",
      answer: "Bao gồm: mentoring 1-1, tài liệu hướng dẫn, cơ hội networking, tham gia sự kiện chuyên môn và có thể nhận tài trợ phát triển nếu thắng cuộc."
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-purple-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8 bg-white rounded-2xl shadow-xl">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Đăng ký thành công!</h2>
          <p className="text-gray-600 mb-6">
            Cảm ơn bạn đã đăng ký tham gia Twin Transition Challenge.
            Chúng tôi sẽ liên hệ với bạn trong vòng 48 giờ tới.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                companyName: '', contactName: '', email: '', phone: '',
                industry: '', employeeCount: '', businessDescription: '',
                currentChallenges: '', twinTransitionIdeas: ''
              });
            }}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Đăng ký thêm doanh nghiệp
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Menu */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-md">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <a href="#" className="font-bold text-xl text-blue-700 tracking-wide">Twin Transition Hub</a>
          <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
            <li><a href="#about" className="hover:text-blue-600 transition-colors">Giới thiệu</a></li>
            <li><a href="#why-join" className="hover:text-blue-600 transition-colors">Bối cảnh & Thách thức</a></li>
            <li><a href="#challenge-section" className="hover:text-blue-600 transition-colors">Sân chơi</a></li>
            <li><a href="#timeline-section" className="hover:text-blue-600 transition-colors">Lịch trình</a></li>
            <li><a href="#how-to-join" className="hover:text-blue-600 transition-colors">Cách tham gia</a></li>
            <li><a href="#support-activities" className="hover:text-blue-600 transition-colors">Hỗ trợ</a></li>
            <li><a href="#events-section" className="hover:text-blue-600 transition-colors">Sự kiện</a></li>
            <li><a href="#prizes-section" className="hover:text-blue-600 transition-colors">Giải thưởng</a></li>
            <li><a href="#partners-section" className="hover:text-blue-600 transition-colors">Đối tác</a></li>
            <li><a href="#news-section" className="hover:text-blue-600 transition-colors">Tin tức</a></li>
            <li><a href="#register" className="hover:text-green-600 font-semibold transition-colors">Đăng ký</a></li>
          </ul>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          {/* Logos */}
          <div className="flex justify-center items-center space-x-8 mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <Building className="w-12 h-12 text-white" />
              <p className="text-xs mt-2 text-center">TTH Project</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <Globe className="w-12 h-12 text-white" />
              <p className="text-xs mt-2 text-center">Bộ Tài chính</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <Users className="w-12 h-12 text-white" />
              <p className="text-xs mt-2 text-center">GIZ</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="block">TWIN</span>
                  <span className="block bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">
                    TRANSITION
                  </span>
                  <span className="block text-3xl lg:text-4xl">HUB</span>
                </h1>

                <div className="space-y-4">
                  <p className="text-xl lg:text-2xl text-blue-100 font-medium">
                    Chuyển đổi số & xanh cho SMEs Việt Nam
                  </p>
                  <p className="text-lg text-blue-100 leading-relaxed">
                    Chương trình hỗ trợ doanh nghiệp vừa và nhỏ trong hành trình chuyển đổi số
                    kết hợp với phát triển bền vững, hướng tới tương lai xanh và thông minh.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#register"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Đăng ký tham gia thử thách
                  <ChevronRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  Tìm hiểu dự án
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-400 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <Leaf className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">GREEN</h3>
                    <p className="text-sm text-blue-100">Bền vững</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <Cpu className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">DIGITAL</h3>
                    <p className="text-sm text-blue-100">Số hóa</p>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="w-10 h-10 text-white transform rotate-90" />
                  </div>
                  <h3 className="text-xl font-bold">TRANSFORMATION</h3>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-green-400 rounded-full blur-2xl opacity-30"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full blur-2xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Project Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Về Dự án Twin Transition Hub
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Dự án được thực hiện bởi Bộ Tài chính Việt Nam và GIZ, nhằm hỗ trợ SMEs Việt Nam
                trong hành trình chuyển đổi số song hành với phát triển bền vững.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <Target className="w-12 h-12 text-blue-500 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mục tiêu</h3>
                <p className="text-gray-600 leading-relaxed">
                  Tạo ra một hệ sinh thái hỗ trợ SMEs trong việc áp dụng công nghệ số
                  và thực hành bền vững, góp phần vào sự phát triển kinh tế xanh của Việt Nam.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <Users className="w-12 h-12 text-green-500 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Đối tác</h3>
                <p className="text-gray-600 leading-relaxed">
                  Hợp tác chiến lược giữa Bộ Tài chính Việt Nam, GIZ và
                  Bộ Hợp tác Kinh tế và Phát triển Liên bang Đức (BMZ).
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <Globe className="w-12 h-12 text-purple-500 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ý nghĩa</h3>
                <p className="text-gray-600 leading-relaxed">
                  Liên kết với các chương trình chiến lược quốc gia về chuyển đổi số,
                  phát triển nông nghiệp bền vững và bảo vệ môi trường.
                </p>
              </div>
            </div>

            {/* Video Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Video giới thiệu dự án</h3>
              <div className="relative bg-gradient-to-r from-blue-500 to-green-500 rounded-xl p-16">
                <Play className="w-20 h-20 text-white mx-auto mb-4" />
                <p className="text-white text-lg">Video sẽ được cập nhật sớm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Context & Challenges Section */}
      <section id="why-join" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Bối cảnh & Thách thức
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                SMEs Việt Nam đang đối mặt với nhiều thách thức trong bối cảnh chuyển đổi số
                và yêu cầu phát triển bền vững ngày càng cao.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {challenges.map((challenge, index) => (
                <div key={index} className={`p-8 rounded-2xl ${challenge.color} border-2`}>
                  <h3 className="text-2xl font-bold mb-6">{challenge.title}</h3>
                  <ul className="space-y-3">
                    {challenge.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <div className={`w-2 h-2 rounded-full mr-3 ${index === 0 ? 'bg-red-500' : 'bg-green-500'
                          }`}></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Cơ hội từ Twin Transition
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sân chơi cho SMEs trình bày sáng kiến chuyển đổi kép (xanh + số). SMEs được hỗ trợ xây dựng pitching bài bản, thực tiễn, thuyết phục. Chủ đề: sáng kiến số – tiết kiệm năng lượng, tài nguyên – giảm phát thải – bình đẳng giới & tăng trưởng bao trùm. */}
      <section id="challenge-section" className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Twin Transition Challenge
              </h2>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto">
                Cuộc thi dành cho SMEs trong 3 ngành trọng điểm, tập trung vào
                bình đẳng giới và tăng trưởng bao trùm.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Leaf className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4">{industry.label}</h3>
                  <p className="text-blue-100 text-center">
                    Ứng dụng công nghệ số và thực hành bền vững trong lĩnh vực {industry.label.toLowerCase()}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-center mb-8">Chủ đề xuyên suốt</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <Users className="w-12 h-12 text-white mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2">Bình đẳng giới</h4>
                  <p className="text-blue-100">
                    Thúc đẩy sự tham gia và lãnh đạo của phụ nữ trong chuyển đổi số và xanh
                  </p>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-white mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2">Tăng trưởng bao trùm</h4>
                  <p className="text-blue-100">
                    Đảm bảo lợi ích từ chuyển đổi được chia sẻ công bằng cho tất cả các bên
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Lịch trình thử thách
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Quy trình rõ ràng, minh bạch từ đăng ký đến trao giải
              </p>
            </div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start group">
                  {/* Số thứ tự với gradient và bóng */}
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl text-white z-10 flex-shrink-0 shadow-lg transition-transform duration-300 ${item.status === 'active'
                    ? 'bg-gradient-to-tr from-blue-600 to-blue-400 group-hover:scale-110'
                    : item.status === 'completed'
                      ? 'bg-gradient-to-tr from-green-600 to-green-400 group-hover:scale-110'
                      : 'bg-gray-300'
                    }`}>
                    {item.status === 'completed' ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      index + 1
                    )}
                  </div>
                  {/* Nội dung chính */}
                  <div className="ml-10 flex-1 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 transition-shadow duration-300 group-hover:shadow-2xl">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-3 tracking-wide ${item.status === 'active'
                          ? 'bg-blue-100 text-blue-700'
                          : item.status === 'completed'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-500'
                          }`}>
                          {item.phase}
                        </span>
                        <h3 className="text-3xl font-extrabold text-gray-900 mb-3 leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <div className="mt-6 lg:mt-0 text-lg font-semibold text-gray-500 tracking-wide min-w-[120px] text-right">
                        {item.date}
                      </div>
                    </div>
                  </div>
                  {/* Đường nối giữa các bước */}
                  {index < timeline.length - 1 && (
                    <div className="absolute left-8 top-20 w-1 bg-gray-300 rounded-full h-20"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* How to Join Section */}
      <section id="how-to-join" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Cách thức tham gia
              </h2>
              <p className="text-xl text-gray-600">
                Quy trình đơn giản và minh bạch cho tất cả SMEs đủ điều kiện
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {[
                { step: "1", title: "Đăng ký", desc: "Hoàn thành form đăng ký online" },
                { step: "2", title: "Nộp ý tưởng", desc: "Trình bày ý tưởng Twin Transition" },
                { step: "3", title: "Mentoring", desc: "Nhận hướng dẫn từ chuyên gia" },
                { step: "4", title: "Pitching", desc: "Thuyết trình tại sự kiện chính" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                  {index < 3 && (
                    <ArrowRight className="w-6 h-6 text-gray-400 mx-auto mt-4 hidden md:block" />
                  )}
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Yêu cầu đối tượng tham gia</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    SMEs hoạt động trong 3 lĩnh vực trọng điểm
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Quy mô từ 10-200 nhân viên
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Đã hoạt động ít nhất 2 năm
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Có ý tưởng cụ thể về Twin Transition
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Cam kết tham gia đầy đủ chương trình
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Có tiềm năng phát triển và mở rộng
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events-section" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Sự kiện chính
              </h2>
              <p className="text-xl text-gray-600">
                Hai sự kiện quan trọng diễn ra trong ngày 22/10/2025
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <Globe className="w-12 h-12 text-blue-600 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Growth Forum</h3>
                    <p className="text-blue-600">Buổi sáng - 22/10/2025</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  Diễn đàn chia sẻ kinh nghiệm và xu hướng Twin Transition từ các chuyên gia
                  trong nước và quốc tế.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Keynote từ lãnh đạo Bộ Tài chính</li>
                  <li>• Panel discussion với chuyên gia GIZ</li>
                  <li>• Case studies thành công</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <Trophy className="w-12 h-12 text-green-600 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Pitching Competition</h3>
                    <p className="text-green-600">Buổi chiều - 22/10/2025</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  Cuộc thi thuyết trình chính thức nơi các SMEs trình bày ý tưởng
                  Twin Transition của mình.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Thuyết trình 10 phút + Q&A 5 phút</li>
                  <li>• Đánh giá bởi hội đồng chuyên gia</li>
                  <li>• Trao giải và networking</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Khách mời và Ban giám khảo
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900">Lãnh đạo Bộ Tài chính</h4>
                  <p className="text-gray-600 text-sm">Chính sách và định hướng</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900">Chuyên gia GIZ</h4>
                  <p className="text-gray-600 text-sm">Kinh nghiệm quốc tế</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900">Nhà đầu tư & Đối tác</h4>
                  <p className="text-gray-600 text-sm">Cơ hội hợp tác</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section id="prizes-section" className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Giải thưởng & Cơ hội
              </h2>
              <p className="text-xl text-purple-100">
                Những phần thưởng giá trị dành cho các SMEs xuất sắc
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {prizes.map((prize, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
                  <div className="flex justify-center mb-4">
                    {prize.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{prize.title}</h3>
                  <p className="text-purple-100 text-sm">{prize.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-center mb-8">Lợi ích cho tất cả SMEs tham gia</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    Networking với cộng đồng SMEs tiên phong
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    Kiến thức chuyên sâu về Twin Transition
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    Chứng nhận tham gia chương trình
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    Cơ hội kết nối với nhà đầu tư
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    Hỗ trợ truyền thông và PR
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    Tham gia cộng đồng Twin Transition Hub
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners-section" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Đối tác & Nhà tài trợ
              </h2>
              <p className="text-xl text-gray-600">
                Sự hợp tác chiến lược từ các tổ chức uy tín
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">APED</h3>
                <p className="text-gray-600">
                  Cục Phát triển Doanh nghiệp Tư nhân và Kinh tế Tập thể
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">GIZ</h3>
                <p className="text-gray-600">
                  Cơ quan Hợp tác Phát triển Đức
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">BambuUP</h3>
                <p className="text-gray-600">
                  Nền tảng đổi mới sáng tạo mở tiên phong tại Việt Nam
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Câu hỏi thường gặp
              </h2>
              <p className="text-xl text-gray-600">
                Giải đáp những thắc mắc phổ biến về Twin Transition Challenge
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                    <ChevronDown className={`w-6 h-6 text-gray-500 transition-transform ${openFAQ === index ? 'rotate-180' : ''
                      }`} />
                  </button>
                  {openFAQ === index && (
                    <div className="px-8 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">Còn câu hỏi khác?</p>
              <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Mail className="w-5 h-5 mr-2" />
                <a href="#contact" className="text-white hover:text-white transition-colors">Liên hệ với chúng tôi</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="register" className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Đăng ký tham gia Twin Transition Challenge
              </h2>
              <p className="text-xl text-blue-100">
                Hoàn thành form dưới đây để tham gia thử thách và nhận hỗ trợ từ chuyên gia
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-semibold text-gray-700 mb-2">
                    <Building className="w-4 h-4 inline mr-2" />
                    Tên công ty *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="VD: Công ty TNHH ABC"
                  />
                </div>

                <div>
                  <label htmlFor="contactName" className="block text-sm font-semibold text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Người liên hệ *
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    required
                    value={formData.contactName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Họ và tên đầy đủ"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="0901234567"
                  />
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-semibold text-gray-700 mb-2">
                    Lĩnh vực hoạt động *
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    required
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Chọn lĩnh vực</option>
                    {industries.map((industry) => (
                      <option key={industry.value} value={industry.value}>
                        {industry.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="employeeCount" className="block text-sm font-semibold text-gray-700 mb-2">
                    Quy mô nhân sự *
                  </label>
                  <select
                    id="employeeCount"
                    name="employeeCount"
                    required
                    value={formData.employeeCount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Chọn quy mô</option>
                    <option value="10-50">10-50 nhân viên</option>
                    <option value="51-100">51-100 nhân viên</option>
                    <option value="101-200">101-200 nhân viên</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="businessDescription" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mô tả ngắn gọn về hoạt động kinh doanh *
                </label>
                <textarea
                  id="businessDescription"
                  name="businessDescription"
                  rows={3}
                  required
                  value={formData.businessDescription}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Mô tả sản phẩm/dịch vụ chính, thị trường mục tiêu..."
                ></textarea>
              </div>

              <div className="mt-6">
                <label htmlFor="currentChallenges" className="block text-sm font-semibold text-gray-700 mb-2">
                  Thử thách hiện tại trong chuyển đổi số/bền vững
                </label>
                <textarea
                  id="currentChallenges"
                  name="currentChallenges"
                  rows={3}
                  value={formData.currentChallenges}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Những khó khăn mà công ty đang gặp phải trong quá trình chuyển đổi..."
                ></textarea>
              </div>

              <div className="mt-6">
                <label htmlFor="twinTransitionIdeas" className="block text-sm font-semibold text-gray-700 mb-2">
                  Ý tưởng Twin Transition của bạn *
                </label>
                <textarea
                  id="twinTransitionIdeas"
                  name="twinTransitionIdeas"
                  rows={4}
                  required
                  value={formData.twinTransitionIdeas}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Chia sẻ ý tưởng kết hợp chuyển đổi số và phát triển bền vững cho doanh nghiệp của bạn..."
                ></textarea>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold text-lg rounded-xl hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                      Đang xử lý...
                    </>
                  ) : (
                    <>
                      Đăng ký tham gia Twin Transition Challenge
                      <ChevronRight className="w-6 h-6 ml-2" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-sm text-gray-500 text-center mt-4">
                Bằng cách đăng ký, bạn đồng ý với điều khoản sử dụng và chính sách bảo mật của Twin Transition Hub
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Liên hệ với chúng tôi
              </h2>
              <p className="text-xl text-gray-600">
                Có bất kỳ câu hỏi nào? Chúng tôi sẵn sàng giúp đỡ bạn.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Địa chỉ</h3>
                <p className="text-gray-600 mb-4">
                  Hà Nội, Việt Nam
                </p>
                <p className="text-gray-600">
                  Email: info@twintransitionhub.vn
                </p>
                <p className="text-gray-600">
                  Hotline: 1900 123 456
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Kết nối với chúng tôi</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <Mail className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                    <Phone className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                    <Globe className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Twin Transition Hub</h3>
              <p className="text-gray-400 mb-6">
                Chuyển đổi số & xanh cho SMEs Việt Nam
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Dự án</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">Giới thiệu</a></li>
                <li><a href="#register" className="hover:text-white transition-colors">Đăng ký</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Lịch trình</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Giải thưởng</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Hỗ trợ</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tài liệu</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mentoring</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Liên hệ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Liên hệ</h4>
              <div className="space-y-2 text-gray-400">
                <p>Email: info@twintransitionhub.vn</p>
                <p>Hotline: 1900 123 456</p>
                <p>Địa chỉ: Hà Nội, Việt Nam</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Twin Transition Hub. Được tài trợ bởi Bộ Tài chính Việt Nam và GIZ.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;