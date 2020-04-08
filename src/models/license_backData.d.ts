//数据备份与证书管理合页
export interface LicenseData {
  subject?: string;
  issued?: string;
  notBefore?: string;
  notAfter?: string;
  consumerType?: string;
  consumerAmount?: number;
  info?: string;
  holder?: {};
  issuer?: {};
  extra?: {};
}
