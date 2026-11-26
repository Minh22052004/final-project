// Đổi số tiền (VND) thành chữ dễ đọc: 458000000 -> "458 triệu", 1250000000 -> "1,25 tỷ"
export const formatPrice = (vnd) => {
  if (vnd >= 1_000_000_000) {
    const ty = vnd / 1_000_000_000;
    return `${ty.toLocaleString('vi-VN', { maximumFractionDigits: 2 })} tỷ`;
  }
  const trieu = Math.round(vnd / 1_000_000);
  return `${trieu.toLocaleString('vi-VN')} triệu`;
};