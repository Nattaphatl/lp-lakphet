export type Category = 'bags' | 'clothes' | 'books' | 'bakery' | 'lifestyle';

export interface Product {
  id: number; name: string; category: Category; price: number;
  emoji: string; tag?: string; tone: [string, string];
}

export const CATEGORIES: { id: Category; th: string; en: string; icon: string }[] = [
  { id: 'bags', th: 'กระเป๋า', en: 'Bags', icon: '👜' },
  { id: 'clothes', th: 'เสื้อผ้า', en: 'Clothes', icon: '👕' },
  { id: 'books', th: 'หนังสือ', en: 'Books', icon: '📖' },
  { id: 'bakery', th: 'เบเกอรี่ & ขนม', en: 'Bakery & Sweets', icon: '🧁' },
  { id: 'lifestyle', th: 'ของใช้ & ไลฟ์สไตล์', en: 'Lifestyle', icon: '☕' },
];

export const PRODUCTS: Product[] = [
  { id: 1, name: 'กระเป๋าหนังทรงโท้ต Classic Black', category: 'bags', price: 1890, emoji: '👜', tag: 'ขายดี', tone: ['#2a3246', '#101827'] },
  { id: 2, name: 'กระเป๋าสะพายข้าง Mini Orange Line', category: 'bags', price: 1290, emoji: '👝', tag: 'ใหม่', tone: ['#ffb04d', '#ff8a00'] },
  { id: 3, name: 'เสื้อยืดโอเวอร์ไซส์ สีขาว', category: 'clothes', price: 490, emoji: '👕', tone: ['#ffffff', '#e6e1d8'] },
  { id: 4, name: 'เสื้อยืดคอตตอนพรีเมียม สีดำ', category: 'clothes', price: 520, emoji: '🖤', tag: 'ขายดี', tone: ['#3a4257', '#101827'] },
  { id: 5, name: 'เสื้อเชิ้ตลินินแขนยาว', category: 'clothes', price: 790, emoji: '👔', tone: ['#efe3cf', '#d8c4a7'] },
  { id: 6, name: 'หนังสือ Better Days', category: 'books', price: 320, emoji: '📘', tone: ['#34507a', '#1b2d4a'] },
  { id: 7, name: 'หนังสือ Better Vibes', category: 'books', price: 350, emoji: '📗', tag: 'ใหม่', tone: ['#5e8f6a', '#2f5a3d'] },
  { id: 8, name: 'คุกกี้ช็อกชิปโฮมเมด (กล่อง 6)', category: 'bakery', price: 180, emoji: '🍪', tag: 'โฮมเมด', tone: ['#f3d9b1', '#d9a75f'] },
  { id: 9, name: 'มัฟฟิ่นบลูเบอร์รี่', category: 'bakery', price: 120, emoji: '🧁', tone: ['#f7e4c6', '#e8b97a'] },
  { id: 10, name: 'ครัวซองต์เนยสด', category: 'bakery', price: 95, emoji: '🥐', tag: 'อบสดทุกวัน', tone: ['#ffd28a', '#ff8a00'] },
  { id: 11, name: 'แก้วเก็บอุณหภูมิ LP Matte', category: 'lifestyle', price: 450, emoji: '☕', tone: ['#2a3246', '#101827'] },
  { id: 12, name: 'ชุดของขวัญ LP Exclusive Box', category: 'lifestyle', price: 990, emoji: '🎁', tag: 'Exclusive', tone: ['#e9d6b8', '#c9ab80'] },
];

export const WHY = [
  { icon: '🏷️', t: 'ราคาปลีก-ส่ง ในที่เดียว', d: 'สลับดูราคาปลีกหรือราคาส่งได้ทันที พร้อมส่วนลดและของแถมตามโปรโมชั่น' },
  { icon: '🧁', t: 'โฮมเมดสดใหม่ทุกวัน', d: 'เบเกอรี่และขนมอบใหม่ คัดวัตถุดิบดี สะอาด ปลอดภัย' },
  { icon: '👜', t: 'แฟชั่นคัดสรร', d: 'กระเป๋าและเสื้อผ้าคุณภาพ ดีไซน์ทันสมัย ใส่ได้ทุกวัน' },
  { icon: '📚', t: 'หนังสือน่าอ่าน', d: 'รวมหนังสือที่เลือกแล้วว่าดี สำหรับวันที่อยากพักใจ' },
  { icon: '🚚', t: 'จัดส่งทั่วประเทศ', d: 'แพ็กอย่างดี ส่งรวดเร็ว ติดตามสถานะได้' },
  { icon: '💬', t: 'บริการประทับใจ', d: 'ทีมงานตอบไว ดูแลทุกการซื้อ ทั้งก่อนและหลังการขาย' },
];
export const NEWS = [
  { tag: 'ข่าวสารร้าน', t: 'LP LAKPHET เปิดคอลเลกชันกระเป๋าใหม่', date: '12 ต.ค. 2026', emoji: '👜' },
  { tag: 'กิจกรรม', t: 'เวิร์กช็อปทำคุกกี้โฮมเมดสุดสัปดาห์นี้', date: '5 ต.ค. 2026', emoji: '🍪' },
  { tag: 'ข่าวสารร้าน', t: 'หนังสือเข้าใหม่ประจำเดือน ตุลาคม', date: '28 ก.ย. 2026', emoji: '📚' },
  { tag: 'โปรโมชั่น', t: 'ซื้อครบ 1,500 บาท ส่งฟรีทั่วประเทศ', date: '20 ก.ย. 2026', emoji: '🎁' },
];
export const PROMOS = [
  { t: 'เสื้อผ้าแฟชั่น ลดสูงสุด 30%', d: 'เฉพาะเดือนนี้ เมื่อซื้อ 2 ชิ้นขึ้นไป', emoji: '👕', tone: ['#ff8a00', '#c76500'] },
  { t: 'เบเกอรี่โฮมเมด ซื้อ 5 แถม 1', d: 'สั่งล่วงหน้ารับของสดใหม่ได้ทุกวัน', emoji: '🥐', tone: ['#3a4257', '#101827'] },
];
