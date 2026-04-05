import { motion } from 'framer-motion';
import {
  Bell,
  Bookmark,
  Bot,
  ChevronRight,
  CloudSun,
  Droplets,
  Eye,
  FileText,
  Heart,
  Image as ImageIcon,
  Leaf,
  MapPin,
  MenuSquare,
  MessageCircle,
  Newspaper,
  Plus,
  QrCode,
  ScanSearch,
  Search,
  SendHorizonal,
  ShieldCheck,
  Sparkles,
  SprayCan,
  SquareChartGantt,
  TrendingUp,
  Upload,
} from 'lucide-react';

function GlowOrb({ className }: { className: string }) {
  return <div className={`absolute rounded-full blur-3xl ${className}`} />;
}

function GlassCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[28px] border border-white/60 bg-white/72 backdrop-blur-2xl shadow-[0_18px_60px_rgba(16,24,40,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(16,24,40,0.12)] ${className}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.82),rgba(255,255,255,0.35))]" />
      <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_28%)]" />
      <div className="relative">{children}</div>
    </div>
  );
}

function MetricCard({
  label,
  value,
  hint,
  icon: Icon,
}: {
  label: string;
  value: string;
  hint: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="group rounded-[24px] border border-white/70 bg-white/82 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_18px_36px_rgba(16,185,129,0.10)]">
      <div className="flex items-start justify-between gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-700 transition duration-300 group-hover:scale-105 group-hover:bg-emerald-100">
          <Icon className="h-5 w-5" />
        </div>
        <ChevronRight className="h-4 w-4 text-slate-400 transition duration-300 group-hover:translate-x-0.5 group-hover:text-emerald-600" />
      </div>
      <div className="mt-5 text-sm text-slate-500">{label}</div>
      <div className="mt-1 text-2xl font-black tracking-tight text-slate-900">{value}</div>
      <div className="mt-2 text-xs text-slate-400">{hint}</div>
    </div>
  );
}

export default function AgriTrackFrontendDemo() {
  const shortcuts = [
    'Quản lý lô trồng',
    'Nhật ký canh tác',
    'Gợi ý chăm sóc',
    'Tích hợp dữ liệu thời tiết',
    'AI Chatbox hỗ trợ',
    'Nhận diện sơ bộ bệnh cây',
  ];

  const plotStatus = [
    ['Lô Cà chua A1', 'Ra hoa', 'Ổn định', 'Lâm Đồng'],
    ['Lô Dưa leo B2', 'Sinh trưởng', 'Cần theo dõi', 'Tiền Giang'],
    ['Lô Xà lách C3', 'Thu hoạch', 'Sẵn sàng', 'Đà Lạt'],
    ['Lô Ớt D4', 'Ra trái', 'Độ ẩm thấp', 'Đồng Tháp'],
    ['Lô Dưa hấu E5', 'Ươm cây', 'Mưa nhẹ', 'Long An'],
  ];

  const quickStats = [
    { label: 'Số lượng lô trồng', value: '24 lô', hint: '06 lô đang ra hoa', icon: Leaf },
    { label: 'Hoạt động gần đây', value: '128 hoạt động', hint: 'Cập nhật trong 7 ngày', icon: FileText },
    { label: 'Trạng thái canh tác', value: '08 cần chú ý', hint: 'Ưu tiên kiểm tra độ ẩm', icon: TrendingUp },
  ];

  const topNav = [
    { label: 'Quản lý lô trồng', icon: SquareChartGantt, active: true },
    { label: 'Nhật ký canh tác', icon: FileText },
    { label: 'Gợi ý chăm sóc', icon: Sparkles },
    { label: 'Dữ liệu thời tiết', icon: CloudSun },
    { label: 'AI Chatbox hỗ trợ', icon: MessageCircle },
    { label: 'Nhận diện bệnh cây', icon: ScanSearch },
    { label: 'QR truy xuất', icon: QrCode },
    { label: 'Chứng nhận sản phẩm', icon: Bookmark },
    { label: 'Dashboard tổng quan', icon: TrendingUp },
  ];

  const posts = [
    {
      author: 'Anh Tâm Miền Tây',
      meta: 'Nông dân trồng cà chua • 2 giờ trước',
      badge: 'Nông dân thường',
      title: 'Ra cành ngoài hỗ trợ mắt cua khi thời tiết bất lợi có ảnh hưởng thế nào?',
      body:
        'Trong điều kiện khí hậu bất thường, việc canh tác cần ưu tiên giữ ổn định độ ẩm và tránh can thiệp mạnh vào giai đoạn cây đang chuyển pha. Nếu xử lý sai thời điểm, cây dễ bị stress, giảm khả năng phát triển mầm và ảnh hưởng đến tỉ lệ đậu trái.',
      stats: ['1.2k', '96', '24'],
    },
    {
      author: 'Hợp tác xã An Phú',
      meta: 'Cập nhật vùng trồng • 4 giờ trước',
      badge: 'Đã xác minh',
      title: 'Lô A1 đã hoàn thành ghi nhật ký tưới và bón dinh dưỡng tuần này',
      body:
        'Hệ thống đã đồng bộ dữ liệu cảm biến, ảnh chụp hiện trường và đề xuất AI. Bà con có thể quét QR để kiểm tra toàn bộ lịch sử chăm sóc của lô trồng.',
      stats: ['860', '52', '18'],
    },
  ];

  const news = [
    {
      title: 'Hoãn tưới cho lô A1 vì dự báo có mưa vào cuối chiều',
      tag: 'Gợi ý chăm sóc',
    },
    {
      title: 'Kiểm tra độ ẩm đất cho lô D4 do nhiệt độ tăng cao vào buổi trưa',
      tag: 'Dữ liệu thời tiết',
    },
    {
      title: 'Ưu tiên quan sát lá non ở lô B2 để phát hiện sớm dấu hiệu bệnh',
      tag: 'Nhận diện bệnh cây',
    },
  ];

  const timelineActions = [
    { label: 'Tưới nước', icon: Droplets, color: 'text-cyan-700 bg-cyan-50' },
    { label: 'Bón phân', icon: Leaf, color: 'text-emerald-700 bg-emerald-50' },
    { label: 'Phun thuốc', icon: SprayCan, color: 'text-amber-700 bg-amber-50' },
  ];

  const activityTimeline = [
    { time: '06:30', title: 'Tưới nước lô A1', desc: 'Hoàn thành theo lịch buổi sáng', icon: Droplets },
    { time: '09:10', title: 'Bón phân lô B2', desc: 'Đã lưu nhật ký và ảnh hiện trường', icon: Leaf },
    { time: '11:45', title: 'AI quét ảnh bệnh lá', desc: 'Phát hiện sơ bộ vùng lá cần kiểm tra', icon: ScanSearch },
  ];

  const plotInsights = [
    { name: 'Lô A1', status: 'Ra hoa', tone: 'emerald', detail: 'Ổn định • AI khuyến nghị hoãn tưới' },
    { name: 'Lô B2', status: 'Sinh trưởng', tone: 'amber', detail: 'Cần theo dõi lá non • Độ ẩm cao' },
    { name: 'Lô D4', status: 'Ra trái', tone: 'cyan', detail: 'Nhiệt độ cao • Kiểm tra đất lúc 05:30' },
  ];

  const certifications = [
    { name: 'VietGAP - Lô B2', status: 'Còn hiệu lực', date: 'Hết hạn sau 28 ngày' },
    { name: 'Nhật ký nội bộ - Lô A1', status: 'Đã đồng bộ', date: 'Cập nhật 2 giờ trước' },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#eefbf3_0%,#f8fffc_35%,#eefaf5_100%)] text-slate-900">
      <GlowOrb className="left-0 top-0 h-72 w-72 bg-emerald-300/30" />
      <GlowOrb className="right-0 top-16 h-80 w-80 bg-cyan-200/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_30%),linear-gradient(to_bottom,rgba(255,255,255,0.5),transparent_35%)]" />

      <div className="relative border-b border-emerald-200/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 sm:px-6">
          <button className="grid h-11 w-11 place-items-center rounded-2xl border border-white/70 bg-white/85 text-slate-600 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-emerald-100 hover:text-emerald-700">
            <MenuSquare className="h-5 w-5" />
          </button>
          <div className="text-3xl font-black tracking-tight text-emerald-600 transition duration-300 hover:scale-[1.03]">
            Agri - Track
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 rounded-full border border-emerald-100 bg-white/95 px-5 py-3 shadow-sm transition duration-300 hover:border-emerald-200 hover:shadow-md">
              <Search className="h-4 w-4 text-slate-400" />
              <span className="text-sm text-slate-400">Tìm kiếm bài viết, kỹ thuật, giá nông sản...</span>
            </div>
          </div>
          <button className="grid h-11 w-11 place-items-center rounded-2xl border border-white/70 bg-white/85 text-emerald-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-sm">
            <Bell className="h-5 w-5" />
          </button>
          <button className="rounded-xl bg-gradient-to-r from-amber-400 to-yellow-300 px-5 py-2.5 text-sm font-bold text-slate-900 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(251,191,36,0.25)]">
            Đăng nhập
          </button>
        </div>
      </div>

      <div className="relative border-b border-slate-200/70 bg-white/55 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 py-4 sm:px-6">
          {topNav.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className={`inline-flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm font-semibold shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-sm ${
                  item.active
                    ? 'border-emerald-200 bg-gradient-to-r from-emerald-50 to-cyan-50 text-emerald-700'
                    : 'border-white/70 bg-white/75 text-slate-600 hover:border-emerald-100 hover:bg-white hover:text-emerald-700'
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-6 px-4 py-5 sm:px-6 xl:grid-cols-[300px_minmax(0,1fr)_340px]">
        <div className="space-y-5">
          <GlassCard className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-3xl font-black tracking-tight">QUẢN LÝ LÔ TRỒNG</h3>
              <ChevronRight className="h-5 w-5 text-slate-400" />
            </div>
            <div className="mt-5 space-y-3">
              {shortcuts.map((item) => (
                <button
                  key={item}
                  className="flex w-full items-center justify-between rounded-2xl border border-white/70 bg-white/70 px-4 py-3 text-left text-sm font-medium text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-emerald-100 hover:bg-emerald-50 hover:shadow-sm"
                >
                  <span>{item}</span>
                  <Plus className="h-4 w-4 text-emerald-600" />
                </button>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="overflow-hidden p-0">
            <div className="border-b border-slate-200/70 px-6 py-5">
              <h3 className="text-2xl font-black">TÍCH HỢP DỮ LIỆU THỜI TIẾT</h3>
              <p className="mt-1 text-sm text-emerald-700">Theo vị trí lô trồng và điều kiện thực tế</p>
            </div>
            <div className="divide-y divide-slate-200/60">
              {plotStatus.map(([name, stage, status, region]) => (
                <button
                  key={name + stage}
                  className="grid w-full grid-cols-[1fr_auto] items-center gap-3 px-6 py-4 text-left text-sm transition duration-300 hover:bg-emerald-50/70"
                >
                  <div>
                    <div className="font-semibold text-slate-800">{name}</div>
                    <div className="mt-1 text-xs text-slate-400">{region}</div>
                    <div className="mt-1 text-xs font-semibold text-emerald-600">{stage}</div>
                    <div className="mt-1 text-xs text-slate-500">{status}</div>
                  </div>
                  <div className="text-right font-bold text-slate-900 transition duration-300 hover:text-emerald-700">23°C</div>
                </button>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black">DASHBOARD TỔNG QUAN</h3>
              <Sparkles className="h-5 w-5 text-emerald-600" />
            </div>
            <div className="mt-4 grid gap-3">
              {quickStats.map((item) => {
                const Icon = item.icon;
                return <MetricCard key={item.label} label={item.label} value={item.value} hint={item.hint} icon={Icon} />;
              })}
            </div>
          </GlassCard>

          <GlassCard className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-slate-500">Trạng thái nổi bật theo lô</div>
                <div className="mt-1 text-xl font-black text-slate-900">INSIGHT LÔ TRỒNG</div>
              </div>
              <Leaf className="h-5 w-5 text-emerald-600" />
            </div>
            <div className="mt-4 space-y-3">
              {plotInsights.map((item) => (
                <div
                  key={item.name}
                  className="rounded-[22px] border border-white/70 bg-white/80 p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-emerald-100 hover:shadow-[0_16px_28px_rgba(16,185,129,0.08)]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-bold text-slate-900">{item.name}</div>
                      <div className="mt-1 text-sm text-slate-500">{item.detail}</div>
                    </div>
                    <div
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        item.tone === 'amber'
                          ? 'bg-amber-50 text-amber-700'
                          : item.tone === 'cyan'
                            ? 'bg-cyan-50 text-cyan-700'
                            : 'bg-emerald-50 text-emerald-700'
                      }`}
                    >
                      {item.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        <div className="space-y-5">
          <GlassCard className="p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-emerald-700">Nhật ký hoạt động theo timeline</div>
                <div className="mt-1 text-2xl font-black tracking-tight">NHẬT KÝ CANH TÁC</div>
              </div>
              <div className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                Live
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-lg font-bold text-emerald-700">A</div>
              <div className="flex-1">
                <div className="mb-4 flex flex-wrap gap-2">
                  {timelineActions.map((action) => {
                    const Icon = action.icon;
                    return (
                      <div key={action.label} className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold ${action.color}`}>
                        <Icon className="h-4 w-4" />
                        {action.label}
                      </div>
                    );
                  })}
                </div>
                <div className="min-h-[120px] rounded-[24px] border border-white/70 bg-white/80 p-4 text-sm text-slate-400 shadow-inner">
                  Ghi lại hoạt động tưới nước, bón phân, phun thuốc và cập nhật dữ liệu theo timeline để phục vụ truy xuất...
                </div>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <button className="inline-flex items-center gap-2 rounded-2xl border border-white/70 bg-white/70 px-4 py-2 text-sm text-emerald-700 transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-50">
                    <ImageIcon className="h-4 w-4" />
                    Tải ảnh / chứng cứ hoạt động
                  </button>
                  <button className="rounded-2xl bg-gradient-to-r from-emerald-500 to-lime-400 px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(16,185,129,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(16,185,129,0.24)]">
                    LƯU NHẬT KÝ
                  </button>
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-emerald-700">Timeline trực quan</div>
                <div className="mt-1 text-2xl font-black tracking-tight">HOẠT ĐỘNG GẦN ĐÂY</div>
              </div>
              <FileText className="h-5 w-5 text-emerald-600" />
            </div>
            <div className="mt-5 space-y-4">
              {activityTimeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.time}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06, duration: 0.35 }}
                    className="flex gap-4 rounded-[24px] border border-white/70 bg-white/82 p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-sm"
                  >
                    <div className="w-14 shrink-0 text-sm font-bold text-emerald-700">{item.time}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-50 text-emerald-700">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-900">{item.title}</div>
                          <div className="mt-1 text-sm text-slate-500">{item.desc}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </GlassCard>

          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
            >
              <GlassCard className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-lg font-bold text-emerald-700">
                    {post.author.charAt(0)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="font-bold text-slate-900">{post.author}</div>
                        <div className="mt-1 text-sm text-slate-500">{post.meta}</div>
                      </div>
                      <div
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          post.badge === 'Đã xác minh'
                            ? 'border border-emerald-200 bg-emerald-50 text-emerald-700'
                            : 'border border-amber-200 bg-amber-50 text-amber-700'
                        }`}
                      >
                        {post.badge}
                      </div>
                    </div>

                    <h3 className="mt-5 text-[26px] font-bold leading-tight text-slate-900">{post.title}</h3>
                    <p className="mt-4 text-[15px] leading-8 text-slate-600">{post.body}</p>

                    <div className="mt-5 rounded-[24px] border border-emerald-100 bg-gradient-to-r from-emerald-50 to-cyan-50 p-4 transition duration-300 hover:-translate-y-0.5">
                      <div className="group/image mb-3 relative h-56 overflow-hidden rounded-[20px] bg-[linear-gradient(135deg,rgba(16,185,129,0.20),rgba(34,211,238,0.12))]">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.45),transparent_26%)]" />
                        <div className="absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-emerald-200/60 blur-2xl transition duration-500 group-hover/image:scale-125" />
                        <div className="absolute right-4 top-4 rounded-full border border-white/60 bg-white/70 px-3 py-1 text-xs font-semibold text-emerald-700 backdrop-blur-md">
                          Smart insight
                        </div>
                        <div className="absolute inset-x-4 bottom-4 rounded-[18px] border border-white/60 bg-white/65 p-3 backdrop-blur-md">
                          <div className="text-sm font-bold text-slate-800">Mô phỏng vùng lô trồng và phân tích điều kiện canh tác</div>
                          <div className="mt-1 text-xs text-slate-500">Kết hợp thời tiết, độ ẩm và ảnh hiện trường để đưa ra đề xuất.</div>
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">
                        <Sparkles className="h-4 w-4" /> AI gợi ý
                      </div>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        Nên kết hợp dữ liệu thời tiết, độ ẩm và ảnh lá cây trước khi can thiệp mạnh vào giai đoạn ra hoa để tránh giảm tỉ lệ đậu trái.
                      </p>
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-slate-200/70 pt-4 text-sm text-slate-500">
                      <div className="flex items-center gap-5">
                        <button className="inline-flex items-center gap-2 transition duration-300 hover:text-emerald-700">
                          <Eye className="h-4 w-4" /> {post.stats[0]}
                        </button>
                        <button className="inline-flex items-center gap-2 transition duration-300 hover:text-rose-500">
                          <Heart className="h-4 w-4" /> {post.stats[1]}
                        </button>
                        <button className="inline-flex items-center gap-2 transition duration-300 hover:text-cyan-700">
                          <MessageCircle className="h-4 w-4" /> {post.stats[2]}
                        </button>
                      </div>
                      <button className="transition duration-300 hover:text-emerald-700">
                        <Bookmark className="h-4 w-4 text-slate-400" />
                      </button>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="space-y-5">
          <GlassCard className="p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-black text-emerald-700">GỢI Ý CHĂM SÓC</h3>
              <Newspaper className="h-5 w-5 text-emerald-600" />
            </div>
            <div className="mt-4 space-y-4">
              {news.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.07, duration: 0.4 }}
                  className="group overflow-hidden rounded-[24px] border border-white/70 bg-white/80 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-emerald-100 hover:shadow-[0_22px_38px_rgba(16,185,129,0.12)]"
                >
                  <div className="relative h-36 overflow-hidden bg-[linear-gradient(135deg,rgba(16,185,129,0.22),rgba(34,211,238,0.18))]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.45),transparent_28%)]" />
                    <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-white/30 blur-2xl transition duration-300 group-hover:scale-125" />
                    <div className="absolute bottom-3 left-3 rounded-full border border-white/60 bg-white/70 px-3 py-1 text-[11px] font-semibold text-emerald-700 backdrop-blur-md">
                      AI recommendation
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="mb-2 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                      {item.tag}
                    </div>
                    <div className="text-[16px] font-bold leading-7 text-slate-800">{item.title}</div>
                    <div className="mt-3 text-sm text-slate-500">Cập nhật theo loại cây • giai đoạn • thời tiết</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Hỏi về chăm sóc, tưới, bón, phòng bệnh</p>
                <h3 className="text-xl font-bold">AI CHATBOX HỖ TRỢ</h3>
              </div>
              <Bot className="h-6 w-6 text-emerald-700" />
            </div>
            <div className="mt-4 space-y-3">
              <div className="ml-auto max-w-[88%] rounded-[20px] rounded-br-md bg-emerald-500 px-4 py-3 text-sm text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md">
                Lô D4 nhiệt độ cao, có nên tưới thêm không?
              </div>
              <div className="max-w-[92%] rounded-[20px] rounded-bl-md border border-emerald-100 bg-emerald-50 px-4 py-4 text-sm leading-7 text-slate-700">
                Nên kiểm tra độ ẩm đất trước. Nếu dưới ngưỡng an toàn, hệ thống gợi ý tưới sớm vào buổi sáng thay vì giữa trưa để giảm bay hơi.
              </div>
              <div className="flex gap-2">
                <div className="flex flex-1 items-center justify-between rounded-2xl border border-white/70 bg-white/80 px-4 py-3 text-sm text-slate-400 transition duration-300 hover:border-emerald-100">
                  <span>Nhập câu hỏi về lô trồng...</span>
                  <MessageCircle className="h-4 w-4 text-slate-400" />
                </div>
                <button className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-400 px-4 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(16,185,129,0.24)]">
                  <SendHorizonal className="h-4 w-4" />
                  Gửi
                </button>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Tải ảnh để hệ thống nhận định sơ bộ</p>
                <h3 className="text-xl font-bold">NHẬN DIỆN SƠ BỘ BỆNH CÂY</h3>
              </div>
              <ScanSearch className="h-6 w-6 text-emerald-700" />
            </div>
            <div className="mt-4 rounded-[24px] border border-dashed border-emerald-200 bg-white/75 p-5 text-center transition duration-300 hover:border-emerald-300 hover:bg-emerald-50/40">
              <div className="mx-auto grid h-24 w-24 place-items-center rounded-[20px] bg-emerald-50 text-emerald-700 transition duration-300 hover:scale-105 hover:rotate-3">
                <Upload className="h-8 w-8" />
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-500">
                Người dùng có thể tải ảnh cây trồng, hệ thống sẽ đưa ra nhận định sơ bộ và gợi ý kiểm tra thêm.
              </p>
              <button className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700 transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-100">
                Tải ảnh cây trồng
              </button>
            </div>
          </GlassCard>

          <GlassCard className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Đính kèm và kiểm tra thời hạn chứng nhận</p>
                <h3 className="text-xl font-bold">CHỨNG NHẬN SẢN PHẨM</h3>
              </div>
              <ShieldCheck className="h-6 w-6 text-emerald-700" />
            </div>
            <div className="mt-4 space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="rounded-[22px] border border-white/70 bg-white/80 p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-emerald-100 hover:shadow-[0_16px_28px_rgba(16,185,129,0.08)]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-bold text-slate-800">{cert.name}</div>
                      <div className="mt-1 text-sm text-slate-500">{cert.date}</div>
                      <div className="mt-2 inline-flex items-center gap-2 text-xs text-slate-400">
                        <MapPin className="h-3.5 w-3.5" /> Hiển thị trong hệ thống truy xuất
                      </div>
                    </div>
                    <div className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                      {cert.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Truy xuất nguồn gốc và chứng nhận</p>
                <h3 className="text-xl font-bold">TRUY XUẤT NGUỒN GỐC BẰNG QR CODE</h3>
              </div>
              <QrCode className="h-6 w-6 text-emerald-700" />
            </div>
            <div className="mt-4 rounded-[24px] border border-dashed border-emerald-200 bg-white/75 p-5 text-center transition duration-300 hover:border-emerald-300 hover:bg-emerald-50/40">
              <div className="mx-auto grid h-32 w-32 place-items-center rounded-[20px] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.18),rgba(255,255,255,0.9))] text-xs text-slate-500 transition duration-300 hover:scale-105 hover:rotate-2 hover:shadow-[0_16px_30px_rgba(16,185,129,0.15)]">
                Dynamic QR
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-500">
                Quét để xem thông tin lô, lịch sử canh tác, dữ liệu liên quan và các chứng nhận như VietGAP còn hiệu lực.
              </p>
              <button className="mt-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-400 px-4 py-2 text-sm font-bold text-white shadow-[0_10px_24px_rgba(16,185,129,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_32px_rgba(16,185,129,0.22)]">
                Xem QR và chứng nhận
              </button>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
