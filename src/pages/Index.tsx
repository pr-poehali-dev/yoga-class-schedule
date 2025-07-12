import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const schedule = [
    {
      day: "Понедельник",
      time: "7:00",
      type: "Хатха йога",
      duration: "90 мин",
    },
    { day: "Вторник", time: "18:30", type: "Виньяса флоу", duration: "75 мин" },
    { day: "Среда", time: "7:00", type: "Аштанга йога", duration: "90 мин" },
    { day: "Четверг", time: "18:30", type: "Инь йога", duration: "75 мин" },
    { day: "Пятница", time: "7:00", type: "Хатха йога", duration: "90 мин" },
    { day: "Суббота", time: "10:00", type: "Виньяса флоу", duration: "90 мин" },
    {
      day: "Воскресенье",
      time: "10:00",
      type: "Медитация",
      duration: "60 мин",
    },
  ];

  const yogaTypes = [
    {
      name: "Хатха йога",
      description:
        "Спокойная практика с акцентом на правильное выравнивание тела и глубокое дыхание",
      icon: "Mountain",
    },
    {
      name: "Виньяса флоу",
      description:
        "Динамичная практика с плавными переходами между асанами под ритм дыхания",
      icon: "Wind",
    },
    {
      name: "Аштанга йога",
      description:
        "Традиционная система с фиксированной последовательностью асан и энергичным темпом",
      icon: "Flame",
    },
    {
      name: "Инь йога",
      description:
        "Медитативная практика с длительным удержанием поз для глубокой растяжки",
      icon: "Moon",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-sage-100 font-open-sans">
      {/* Hero Section */}
      <section className="relative px-6 py-20 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-montserrat font-bold text-sage-800 leading-tight">
                Марина Светлова
              </h1>
              <p className="text-xl text-sage-600 font-medium">
                Сертифицированный инструктор йоги
              </p>
              <p className="text-lg text-sage-600 max-w-md mx-auto lg:mx-0">
                Приглашаю вас в путешествие к гармонии тела и души через древнюю
                практику йоги
              </p>
              <div className="flex gap-4 justify-center lg:justify-start">
                <Button className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-3 rounded-full font-medium">
                  Записаться на занятие
                </Button>
                <Button
                  variant="outline"
                  className="border-sage-600 text-sage-600 hover:bg-sage-50 px-8 py-3 rounded-full font-medium"
                >
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 animate-scale-in">
              <img
                src="/img/11769e6e-4280-4ddf-af84-0cf4e594cc5f.jpg"
                alt="Марина в позе лотоса"
                className="rounded-3xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="px-6 py-16 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-sage-800 mb-4">
              Расписание занятий
            </h2>
            <p className="text-lg text-sage-600">
              Выберите удобное время для практики
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {schedule.map((item, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-sage-200 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-sage-800 font-montserrat text-lg">
                    {item.day}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-sage-600">
                    <Icon name="Clock" size={16} />
                    <span className="font-medium">{item.time}</span>
                  </div>
                  <div className="text-sage-700 font-medium">{item.type}</div>
                  <div className="text-sm text-sage-500">{item.duration}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-montserrat font-bold text-sage-800">
                О преподавателе
              </h2>
              <p className="text-lg text-sage-600 leading-relaxed">
                Более 10 лет я посвятила изучению и преподаванию йоги. Моя
                практика началась как способ справиться со стрессом городской
                жизни, но постепенно стала образом жизни и призванием.
              </p>
              <p className="text-lg text-sage-600 leading-relaxed">
                Я сертифицированный инструктор RYT-500, прошла обучение в Индии
                у традиционных мастеров. В своих занятиях я сочетаю древние
                знания с современным пониманием анатомии и безопасности
                практики.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sage-700">
                  <Icon name="Award" size={20} className="text-sage-600" />
                  <span>Сертификат RYT-500 Yoga Alliance</span>
                </div>
                <div className="flex items-center gap-3 text-sage-700">
                  <Icon name="Heart" size={20} className="text-sage-600" />
                  <span>Более 1000 часов преподавания</span>
                </div>
                <div className="flex items-center gap-3 text-sage-700">
                  <Icon name="Users" size={20} className="text-sage-600" />
                  <span>200+ довольных учеников</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/bc942a40-1c4d-478f-b284-be9aa33c7f93.jpg"
                alt="Йога студия"
                className="rounded-3xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-sage-600 text-white p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm opacity-90">лет опыта</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Yoga Types Section */}
      <section className="px-6 py-16 bg-sage-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-sage-800 mb-4">
              Виды йоги
            </h2>
            <p className="text-lg text-sage-600">
              Найдите практику, которая подходит именно вам
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {yogaTypes.map((type, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-sage-200 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 bg-sage-100 rounded-full group-hover:bg-sage-200 transition-colors">
                      <Icon
                        name={type.icon}
                        size={24}
                        className="text-sage-600"
                      />
                    </div>
                    <CardTitle className="text-sage-800 font-montserrat text-xl">
                      {type.name}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sage-600 leading-relaxed">
                    {type.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-montserrat font-bold text-sage-800 mb-6">
            Практика дома
          </h2>
          <p className="text-lg text-sage-600 mb-8">
            Посмотрите видео с моей практикой и попробуйте дома
          </p>

          <div className="relative bg-sage-100 rounded-3xl p-12 shadow-lg">
            <div className="flex flex-col items-center space-y-6">
              <div className="p-8 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
                <Icon
                  name="Play"
                  size={48}
                  className="text-sage-600 group-hover:text-sage-700 transition-colors"
                />
              </div>
              <h3 className="text-2xl font-montserrat font-semibold text-sage-800">
                Утренняя практика Сурья Намаскар
              </h3>
              <p className="text-sage-600 max-w-2xl">
                15-минутная последовательность приветствия солнца для бодрого
                начала дня. Идеально подходит для начинающих и продолжающих
                практиков.
              </p>
              <Button className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-3 rounded-full font-medium">
                Смотреть видео
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-16 bg-sage-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-montserrat font-bold mb-6">
            Начните свой путь к гармонии
          </h2>
          <p className="text-xl mb-8 text-sage-100">
            Присоединяйтесь к нашему сообществу и откройте для себя
            преображающую силу йоги
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button className="bg-white text-sage-800 hover:bg-sage-50 px-8 py-3 rounded-full font-medium">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (999) 123-45-67
            </Button>
            <Button className="bg-white text-sage-800 hover:bg-sage-50 px-8 py-3 rounded-full font-medium">
              <Icon name="Mail" size={20} className="mr-2" />
              marina@yoga.ru
            </Button>
            <Button className="bg-white text-sage-800 hover:bg-sage-50 px-8 py-3 rounded-full font-medium">
              <Icon name="Instagram" size={20} className="mr-2" />
              @marina_yoga
            </Button>
          </div>

          <p className="text-sage-200">
            Студия йоги "Гармония" • ул. Мира, 15 • Москва
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
