import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { CATEGORIES, NEWS, PRODUCTS, PROMOS, WHY, Category, Product } from './products';

@Component({
  selector: 'app-root',
  imports: [DecimalPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly categories = CATEGORIES;
  protected readonly why = WHY;
  protected readonly news = NEWS;
  protected readonly promos = PROMOS;
  protected readonly active = signal<Category | 'all'>('all');
  protected readonly query = signal('');
  protected readonly mode = signal<'retail' | 'wholesale'>('retail');
  protected readonly cartOpen = signal(false);
  protected readonly menuOpen = signal(false);
  protected readonly cookie = signal(true);
  protected readonly toast = signal('');
  private readonly cart = signal<Record<number, number>>({});
  private toastTimer?: ReturnType<typeof setTimeout>;

  protected price(p: Product): number {
    return this.mode() === 'wholesale' ? Math.round(p.price * 0.85) : p.price;
  }
  protected readonly visible = computed(() => {
    const q = this.query().trim().toLowerCase();
    return PRODUCTS.filter(
      (p) => (this.active() === 'all' || p.category === this.active()) && (!q || p.name.toLowerCase().includes(q)),
    );
  });
  protected readonly lines = computed(() =>
    PRODUCTS.filter((p) => this.cart()[p.id]).map((p) => ({ p, qty: this.cart()[p.id] })),
  );
  protected readonly count = computed(() => this.lines().reduce((s, l) => s + l.qty, 0));
  protected readonly total = computed(() => this.lines().reduce((s, l) => s + l.qty * this.price(l.p), 0));

  protected pick(cat: string): void {
    this.active.set(cat as Category | 'all');
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
  }
  protected add(p: Product): void {
    this.change(p.id, 1);
    this.notify(`เพิ่ม “${p.name}” ลงตะกร้าแล้ว`);
  }
  protected change(id: number, delta: number): void {
    this.cart.update((c) => {
      const qty = (c[id] ?? 0) + delta;
      const { [id]: _, ...rest } = c;
      return qty > 0 ? { ...rest, [id]: qty } : rest;
    });
  }
  protected checkout(): void {
    this.cart.set({});
    this.cartOpen.set(false);
    this.notify('ขอบคุณที่ช้อปกับเรา! ทีมงานจะติดต่อกลับเร็ว ๆ นี้');
  }
  protected top(): void { window.scrollTo({ top: 0, behavior: 'smooth' }); }
  protected notify(msg: string): void {
    this.toast.set(msg);
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => this.toast.set(''), 2600);
  }
}
