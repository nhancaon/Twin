import React from 'react';
import { ArrowLeft, Cpu, Leaf, Zap, Globe, Users, TrendingUp, Lightbulb, Target, Award } from 'lucide-react';

interface TwinTransitionInfoProps {
  onBack: () => void;
}

const TwinTransitionInfo: React.FC<TwinTransitionInfoProps> = ({ onBack }) => {
  const digitalFeatures = [
    {
      icon: <Cpu className="w-8 h-8 text-blue-500" />,
      title: "Tự động hóa quy trình",
      description: "Ứng dụng AI và IoT để tối ưu hóa hoạt động kinh doanh"
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: "Kết nối toàn cầu",
      description: "Mở rộng thị trường thông qua nền tảng số"
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: "Tăng hiệu suất",
      description: "Nâng cao năng suất và giảm chi phí vận hành"
    }
  ];

  const greenFeatures = [
    {
      icon: <Leaf className="w-8 h-8 text-green-500" />,
      title: "Giảm carbon footprint",
      description: "Áp dụng công nghệ xanh để bảo vệ môi trường"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: "Kinh tế tuần hoàn",
      description: "Tối ưu hóa tài nguyên và tái chế hiệu quả"
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Trách nhiệm xã hội",
      description: "Đóng góp tích cực cho cộng đồng và xã hội"
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-12 h-12 text-purple-500" />,
      title: "Tăng cường cạnh tranh",
      description: "Dẫn đầu thị trường với mô hình kinh doanh bền vững và hiện đại"
    },
    {
      icon: <Award className="w-12 h-12 text-orange-500" />,
      title: "Tuân thủ quy định",
      description: "Đáp ứng các tiêu chuẩn quốc tế về môi trường và công nghệ"
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-yellow-500" />,
      title: "Đổi mới sáng tạo",
      description: "Khuyến khích văn hóa đổi mới và phát triển bền vững"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-6">
        <div className="container mx-auto px-4">
          <button
            onClick={onBack}
            className="inline-flex items-center text-white hover:text-blue-100 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Quay lại trang chủ
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-green-50 to-purple-50">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  <span className="block">WHAT IS</span>
                  <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    TWIN
                  </span>
                  <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    TRANSITION?
                  </span>
                </h1>
                
                <div className="space-y-4">
                  <p className="text-xl text-gray-700 font-medium">
                    Sự kết hợp hoàn hảo giữa chuyển đổi số và phát triển bền vững
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Twin Transition là xu hướng toàn cầu kết hợp chuyển đổi số (Digital Transformation) 
                    với chuyển đổi xanh (Green Transformation) để tạo ra giá trị bền vững cho doanh nghiệp.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Representation */}
            <div className="relative">
              <div className="relative z-10">
                {/* Main Circle */}
                <div className="w-80 h-80 mx-auto relative">
                  {/* Background circles */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-green-200 rounded-full opacity-30 animate-pulse"></div>
                  <div className="absolute inset-4 bg-gradient-to-r from-green-200 to-blue-200 rounded-full opacity-40"></div>
                  
                  {/* Main content circle */}
                  <div className="absolute inset-8 bg-white rounded-full shadow-2xl flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="flex justify-center space-x-4">
                        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                          <Cpu className="w-8 h-8 text-white" />
                        </div>
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                          <Leaf className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-gray-800">DIGITAL</h3>
                        <div className="text-4xl font-bold text-gray-400">+</div>
                        <h3 className="text-2xl font-bold text-gray-800">GREEN</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-10 left-10 w-20 h-20 bg-pink-300 rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 bg-green-300 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-0 w-12 h-12 bg-blue-300 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Transformation Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500 rounded-full mb-6">
                <Cpu className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Chuyển đổi số (Digital)
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ứng dụng công nghệ tiên tiến để tối ưu hóa quy trình, nâng cao hiệu quả 
                và tạo ra trải nghiệm khách hàng vượt trội
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {digitalFeatures.map((feature, index) => (
                <div key={index} className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Green Transformation Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-6">
                <Leaf className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Chuyển đổi xanh (Green)
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Xây dựng mô hình kinh doanh bền vững, thân thiện với môi trường 
                và có trách nhiệm với cộng đồng
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {greenFeatures.map((feature, index) => (
                <div key={index} className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Connection Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Làm thế nào Digital và Green kết nối?
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold mb-4">Tối ưu hóa tài nguyên</h3>
                  <p className="text-blue-100">
                    Công nghệ IoT và AI giúp giám sát và tối ưu hóa việc sử dụng năng lượng, 
                    giảm thiểu lãng phí và tác động môi trường.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold mb-4">Minh bạch chuỗi cung ứng</h3>
                  <p className="text-blue-100">
                    Blockchain và big data đảm bảo tính minh bạch trong chuỗi cung ứng, 
                    theo dõi nguồn gốc và tác động môi trường.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold mb-4">Kinh tế chia sẻ</h3>
                  <p className="text-blue-100">
                    Nền tảng số kết nối người dùng, tối ưu hóa việc sử dụng tài sản 
                    và giảm thiểu sản xuất không cần thiết.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold mb-4">Báo cáo ESG tự động</h3>
                  <p className="text-blue-100">
                    Hệ thống tự động thu thập và báo cáo các chỉ số ESG, 
                    đảm bảo tuân thủ và minh bạch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Lợi ích của Twin Transition
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Khi kết hợp chuyển đổi số và xanh, doanh nghiệp sẽ đạt được những lợi ích vượt trội
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Sẵn sàng bắt đầu Twin Transition?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Tham gia Twin Transition Challenge để khám phá tiềm năng của doanh nghiệp bạn
            </p>
            <button
              onClick={onBack}
              className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Đăng ký ngay
              <ArrowLeft className="w-5 h-5 ml-2 transform rotate-180" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Twin Transition Challenge</h3>
            <p className="text-gray-400 mb-6">
              Kết nối công nghệ và bền vững cho tương lai doanh nghiệp
            </p>
            <div className="flex justify-center space-x-6 text-gray-400">
              <span>Email: info@twintransition.vn</span>
              <span>Hotline: 1900 123 456</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TwinTransitionInfo;