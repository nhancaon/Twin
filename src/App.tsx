import React, { useState } from "react";
import images from "./assets";
import { prizes, faqs, rawTimeline, industries } from "./data/constants";
import { Fade, Slide } from "react-awesome-reveal";
import {
  ChevronRight,
  Leaf,
  Cpu,
  Users,
  Trophy,
  ArrowRight,
  CheckCircle,
  Play,
  Target,
  Globe,
  TrendingUp,
  ChevronDown
} from "lucide-react";

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
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const getTimelineStatus = (dateString: string) => {
    const currentDate = new Date();
    const dateParts = dateString.split(" ")[0].split("/");
    let eventDate: Date;

    if (dateParts.length === 3) {
      // Format DD/MM/YYYY
      const day = parseInt(dateParts[0]);
      const month = parseInt(dateParts[1]) - 1; // Month is 0-indexed
      const year = parseInt(dateParts[2]);
      eventDate = new Date(year, month, day);
    } else if (dateParts.length === 2) {
      // Format MM/YYYY (for ranges like 06/10)
      const month = parseInt(dateParts[0]) - 1;
      const year = parseInt(dateParts[1]);
      eventDate = new Date(year, month, 1); // Assume start of month for comparison
    } else {
      return "upcoming"; // Default for unrecognized date formats
    }

    // For ranges, we assume it's active if current date is within the range or past the start
    if (dateString.includes("-")) {
      const [startDateStr, endDateStr] = dateString.split(" - ");
      const startDateParts = startDateStr.split("/");
      const endDateParts = endDateStr.split(" ")[0].split("/");

      const startDay = parseInt(startDateParts[0]);
      const startMonth = parseInt(startDateParts[1]) - 1;
      const startYear = parseInt(
        startDateParts[2] || currentDate.getFullYear().toString()
      );
      const startDate = new Date(startYear, startMonth, startDay);

      const endDay = parseInt(endDateParts[0]);
      const endMonth = parseInt(endDateParts[1]) - 1;
      const endYear = parseInt(
        endDateParts[2] || currentDate.getFullYear().toString()
      );
      const endDate = new Date(endYear, endMonth, endDay);

      if (currentDate >= startDate && currentDate <= endDate) {
        return "active";
      } else if (currentDate > endDate) {
        return "completed";
      } else {
        return "upcoming";
      }
    } else {
      // Single date event
      if (currentDate.toDateString() === eventDate.toDateString()) {
        return "active";
      } else if (currentDate > eventDate) {
        return "completed";
      } else {
        return "upcoming";
      }
    }
  };

  const timeline = rawTimeline.map((item) => ({
    ...item,
    status: getTimelineStatus(item.date),
  }));

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Menu */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-md">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <a href="#" className="font-bold text-xl text-blue-700 tracking-wide transition-transform duration-300 transform hover:scale-105">
            Twin Transition Challenge
          </a>
          <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
            <li>
              <a
                href="#about"
                className="hover:text-blue-600 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#target-section"
                className="hover:text-blue-600 transition-colors"
              >
                Target Participants
              </a>
            </li>
            <li>
              <a
                href="#selection-section"
                className="hover:text-blue-600 transition-colors"
              >
                Selection Criteria
              </a>
            </li>
            <li>
              <a
                href="#timeline-section"
                className="hover:text-blue-600 transition-colors"
              >
                Timeline
              </a>
            </li>
            <li>
              <a
                href="#events-section"
                className="hover:text-blue-600 transition-colors"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#prizes-section"
                className="hover:text-blue-600 transition-colors"
              >
                Prizes
              </a>
            </li>
            <li>
              <a
                href="#partners-section"
                className="hover:text-blue-600 transition-colors"
              >
                Partners
              </a>
            </li>
            <li>
              <a
                href="#q&a-section"
                className="hover:text-blue-600 transition-colors"
              >
                Q&A
              </a>
            </li>
            <li>
              <a
                href="#register"
                className="bg-green-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-700 hover:shadow-lg transition-transform transform hover:scale-105 font-semibold"
              >
                Register
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Hero Section */}
      <Slide direction="down" triggerOnce>
        <section style={{ backgroundImage: `url(${images.hero_bg})` }} className="relative overflow-hidden text-white bg-cover bg-center bg-no-repeat text-white">

          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-green-500/90 z-0"></div>
          <div className="relative container mx-auto px-4 pt-4 lg:pt-6 pb-24 lg:pb-32">
            <img
              src={images.logo}
              alt="Poster"
              className="h-32 w-auto object-fill rounded-lg mr-2"
            />
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                    <span className="block">TWIN TRANSITION</span>
                    <span className="block ">CHALLENGE</span>
                  </h1>

                  <div className="space-y-4  border-l-8 border-x-cyan-300 pl-4">
                    <p className="text-lg text-white leading-relaxed">
                      Chương trình hỗ trợ doanh nghiệp vừa và nhỏ trong hành trình
                      chuyển đổi số kết hợp với phát triển bền vững, hướng tới
                      tương lai xanh và thông minh.
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
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/80 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
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
      </Slide>

      <Fade triggerOnce style={{ position: "relative", zIndex: 40 }}>
        <section className="relative bg-transparent">
          <img
            src={images.gd}
            alt="Decor"
            className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-auto h-48 z-50"
          />
        </section>
      </Fade>


      {/* About Project Section */}
      <Slide direction="left" triggerOnce>

        <section id="about" className="py-5 bg-gray-50">

          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center relative items-center justify-center">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 relative z-10 mt-16">
                  Về Chương trình Twin Transition Challenge
                </h2>
                <p className="text-center text-xl text-gray-900 max-w-4xl mx-auto leading-relaxed relative z-10 mt-2 mb-3">
                  Đồng hành cùng doanh nghiệp nhỏ và vừa Việt Nam kiến tạo tương lai xanh - số hóa hướng tới tăng trưởng bền vững và bao trùm.
                </p>
              </div>



              <div className="grid lg:grid-cols-1 gap-8 mb-16">
                <div className="bg-gradient-to-r from-blue-600 to-green-600 p-8 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                  <Target className="w-12 h-12 text-yellow-300 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Tổng quan
                  </h3>
                  <p className="text-lg text-white leading-relaxed">
                    <b className="text-yellow-300">Twin Transition Challenge</b> là chương trình nằm trong Dự án <b className="text-yellow-300">“Trung tâm Chuyển đổi kép - Chuyển đổi số và Đổi mới sáng tạo nhằm bảo vệ môi trường và khí hậu tại Việt Nam”</b> dành cho các <b className="text-yellow-300">DNNVV (SMEs) tại Việt Nam</b>, được tổ chức bởi <b className="text-yellow-300">Cục Phát triển Doanh nghiệp tư nhân và Kinh tế tập thể - APED (Bộ Tài chính)</b> và <b className="text-yellow-300">Tổ chức Hợp tác Quốc tế Đức - GIZ</b>, phối hợp triển khai bởi <b className="text-yellow-300">Công ty Cổ phần BambuUP</b> với mục tiêu tăng cường sử dụng năng lượng và nguồn lực đầu vào  hiệu quả thông qua chuyển đổi số và chuyển đổi xanh, kiến tạo tương lai xanh hóa - số hóa hướng tới giảm phát thải, phát triển bền vững.
                  </p>
                </div>
              </div>


              {/* Poster Section */}
              <img
                src={images.poster}
                alt="Poster"
                className="w-auto object-fill rounded-lg mr-2"
              />
            </div>
          </div>
        </section>
      </Slide>

      {/* Target Section */}
      <Fade triggerOnce>
        <section
          id="target-section"
          className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-6">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Đối tượng tham gia
                </h2>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-5">
                <h3 className="text-2xl font-bold text-center mb-8">
                  Đối tượng tham gia là các doanh nghiệp nhỏ và vừa (SME) theo tiêu chuẩn:
                </h3>
                <div className="grid md:grid-cols-1 gap-8">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                      Nhân sự: Không quá 500 nhân viên.
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                      Doanh thu hàng năm không vượt quá 300 tỷ VNĐ.
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                      Hoạt động trong ba lĩnh vực ưu tiên:
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid lg:grid-cols-3 gap-8 mb-5">
                {industries.map((industry, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
                  >
                    <img
                      src={industry.image}
                      className="h-56 w-auto object-contain flex items-center justify-center mx-auto mb-3"
                    />
                    <h3 className="text-2xl font-bold text-center mb-4">
                      {industry.label}
                    </h3>
                  </div>
                ))}
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-2">
                <div className="grid md:grid-cols-1 gap-8">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-300 mr-3 flex-shrink-0 self-start" />
                      Đặc biệt, các công ty do phụ nữ làm chủ được ưu tiên khuyến khích tham gia.
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-300 mr-3 flex-shrink-0 self-start" />
                      Doanh nghiệp có sáng kiến về chuyển đổi số và chuyển đổi xanh đang hoặc đã triển khai với tác động có thể đo lường được, giải quyết các thách thức của Việt Nam, với ít nhất một thành viên trong nhóm có mặt tại Việt Nam.
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-300 mr-3 flex-shrink-0 self-start" />
                      Nhóm phải có ít nhất 50% sự tham gia của phụ nữ, hoặc giải pháp phải hỗ trợ phụ nữ hoặc các nhóm yếu thế.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>

      {/* Prepart Section */}
      <Fade triggerOnce>
        <section
          id="prepare-section"
          className="py-20 bg-gradient-to-r bg-white text-black"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-4">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Hồ sơ cần chuẩn bị
                </h2>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 border-2 border-green-500">
                <h3 className="text-2xl font-bold text-center mb-8 text-gray-600">
                  Doanh nghiệp cần điền thông tin theo mẫu và chuẩn bị tài liệu (bản trình bày, video) bao gồm các thông tin:
                </h3>
                <div className="grid md:grid-cols-2 gap-8 text-gray-900">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 self-start" />
                      Giới thiệu doanh nghiệp
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 self-start" />
                      Giới thiệu về sáng kiến chuyển đổi xanh và số của doanh nghiệp
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 self-start" />
                      Tác động của các sáng kiến
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>

      {/* Selection Criteria Section */}
      <Fade triggerOnce>
        <section
          id="selection-section"
          className="py-20 relative overflow-hidden text-white bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${images.txt})` }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-6">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Tiêu chí tuyển chọn
                </h2>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-5">
                <h3 className="text-2xl font-bold text-center mb-8">
                  Đối tượng tham gia là các doanh nghiệp nhỏ và vừa (SME) theo tiêu chuẩn:
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-300 mr-3 flex-shrink-0 self-start" />
                      Mức độ triển khai/ tích hợp chuyển đổi kép trong hoạt động kinh doanh hiện tại
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-300 mr-3 flex-shrink-0 self-start" />
                      Tác động của sáng kiến
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-300 mr-3 flex-shrink-0 self-start" />
                      Mức độ đổi mới sáng tạo
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-300 mr-3 flex-shrink-0 self-start" />
                      Tính khả thi và mức độ sẵn sàng
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-300 mr-3 flex-shrink-0 self-start" />
                      Khả năng mở rộng và nhân rộng
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-300 mr-3 flex-shrink-0 self-start" />
                      Tính bền vững về tài chính
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-300 mr-3 flex-shrink-0 self-start" />
                      Cam kết của đội ngũ/ Tầm nhìn và năng lực lãnh đạo
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-300 mr-3 flex-shrink-0 self-start" />
                      Sự phù hợp với chính sách quốc gia/ khu vực
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>

      {/* Timeline Section */}
      <Fade triggerOnce>
        <section id="timeline-section" className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-5xl font-extrabold text-gray-900 mb-2 tracking-tight">
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
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl text-white z-10 flex-shrink-0 shadow-lg transition-transform duration-300 ${item.status === "active"
                        ? "bg-gradient-to-tr from-blue-600 to-blue-400 group-hover:scale-110"
                        : item.status === "completed"
                          ? "bg-gradient-to-tr from-green-600 to-green-400 group-hover:scale-110"
                          : "bg-gray-300"
                        }`}
                    >
                      {item.status === "completed" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-7 w-7"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        index + 1
                      )}
                    </div>
                    {/* Nội dung chính */}
                    <div className="ml-10 flex-1 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 transition-shadow duration-300 group-hover:shadow-2xl">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex-1">
                          <span
                            className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-3 tracking-wide ${item.status === "active"
                              ? "bg-blue-100 text-blue-700"
                              : item.status === "completed"
                                ? "bg-green-100 text-green-700"
                                : "bg-gray-100 text-gray-500"
                              }`}
                          >
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
      </Fade>

      {/* Events Section */}
      <Slide direction="right" triggerOnce>
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
                      <h3 className="text-2xl font-bold text-gray-900">
                        Twin Transition Growth Forum
                      </h3>
                      <p className="text-blue-600">Buổi sáng - 22/10/2025</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6">
                    Là diễn đàn đa bên với sự tham gia của doanh nghiệp, chuyên gia, nhà đầu tư. Doanh nghiệp sẽ có cơ hội cập nhật xu hướng, học hỏi kinh nghiệm thực tiễn, kết nối và tìm kiếm cơ hội hợp tác.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
                  <div className="flex items-center mb-6">
                    <Trophy className="w-12 h-12 text-green-600 mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        Chung kết thuyết trình trước Hội đồng đánh giá
                      </h3>
                      <p className="text-green-600">Buổi chiều - 22/10/2025</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6">
                    Các doanh nghiệp sẽ trình bày dự án chuyển đổi kép trước hội đồng giám khảo và khán giả.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Slide>

      {/* Prizes Section */}
      <Slide direction="up" triggerOnce>
        <section
          id="prizes-section"
          style={{ backgroundImage: `url(${images.bg})` }}
          className="relative overflow-hidden text-white bg-cover bg-center bg-no-repeat pt-10 pb-10"
        >
          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-700/60 via-emerald-600/40 to-green-500/40 z-10"></div>

          {/* content */}
          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-8xl mx-auto">
              <div className="text-center">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white drop-shadow-lg">
                  Quyền lợi khi tham gia chương trình
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-1">
                {prizes.map((prize, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center shadow-lg hover:shadow-2xl transition duration-300"
                  >
                    <div className="flex justify-center mb-4 text-green-300">
                      {prize.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-white">
                      {prize.title}
                    </h3>
                    <p className="text-base text-white">
                      {prize.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Slide>


      {/* Partners Section */}
      <Fade triggerOnce>
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
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center transition-shadow duration-300 hover:shadow-xl">
                  <img
                    src={images.aped}
                    alt="GIZ Logo"
                    className="h-24 w-auto object-contain bg-white p-2 rounded-lg flex items-center justify-center mx-auto mb-2"
                  />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">APED</h3>
                  <p className="text-gray-600">
                    Cục Phát triển Doanh nghiệp Tư nhân và Kinh tế Tập thể (Bộ Tài chính Việt Nam)
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg text-center transition-shadow duration-300 hover:shadow-xl">
                  <img
                    src={images.giz}
                    alt="GIZ Logo"
                    className="h-20 w-auto object-contain bg-white p-2 rounded-lg flex items-center justify-center mx-auto mb-6"
                  />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">GIZ</h3>
                  <p className="text-gray-600">Cơ quan Hợp tác Phát triển Đức</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg text-center transition-shadow duration-300 hover:shadow-xl">
                  <img
                    src={images.bbu}
                    alt="GIZ Logo"
                    className="h-20 w-auto object-contain bg-white p-2 rounded-lg flex items-center justify-center mx-auto mb-6"
                  />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    BambuUP
                  </h3>
                  <p className="text-gray-600">
                    Nền tảng đổi mới sáng tạo mở tiên phong tại Việt Nam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>

      {/* FAQ Section */}
      <Fade triggerOnce>
        <section id="q&a-section" className="py-20 bg-gray-50">
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
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-lg font-bold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      <ChevronDown
                        className={`w-6 h-6 text-gray-500 transition-transform ${openFAQ === index ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                    {openFAQ === index && (
                      <div className="px-8 pb-6">
                        <p className="mb-4">{faq.intro}</p>
                        {faq.answer && (
                          <ul className="list-disc list-inside space-y-2">
                            {faq.answer.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Fade>
      <section
        id="register"
        className="py-20 bg-gradient-to-r from-blue-600 to-green-600 flex items-center justify-center"
      >
        <iframe
          src="https://airtable.com/embed/appwQsjmzzh0RDaXr/pagByLmsjmGIl7xey/form"
          frameBorder="0"
          onLoad={() => console.log("Airtable form loaded.")}
          width="70%"
          height="3080"
          style={{ background: "transparent", border: "1px solid #ccc" }}
          title="Twin Transition Challenge Registration Form"
        ></iframe>
      </section>

      {/* Footer */}
      <Fade triggerOnce>
        <footer style={{ backgroundImage: `url(${images.twin})` }} className="relative overflow-hidden bg-cover bg-center bg-no-repeat text-white">
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 container mx-auto px-4 mt-5">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Twin Transition Challenge</h3>
                <p className="text-white mb-6">
                  Chuyển đổi số & xanh cho SMEs Việt Nam
                </p>
                {/* <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                </div> */}
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Dự án</h4>
                <ul className="space-y-2 text-white">
                  <li>
                    <a
                      href="#about"
                      className="hover:text-white transition-colors"
                    >
                      Giới thiệu
                    </a>
                  </li>
                  <li>
                    <a
                      href="#register"
                      className="hover:text-white transition-colors"
                    >
                      Đăng ký
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Lịch trình
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Giải thưởng
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Hỗ trợ</h4>
                <ul className="space-y-2 text-white">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Tài liệu
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Mentoring
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Liên hệ
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Ban tổ chức</h4>
                <div className="space-y-2 text-white">
                  <p>Ms. Hà Linh (083 911 1104)</p>
                  <p>Ms. Hạnh Nguyễn (083.9918.445)</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
              <p>
                &copy; 2025 Twin Transition Challenge.
              </p>
            </div>
          </div>
        </footer>
      </Fade>
    </div>
  );
}

export default App;
