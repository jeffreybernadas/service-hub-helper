export interface IEmailLocals {
  sender?: string; // Sender of the email (we might not need this)
  appLink: string; // Link for the app (frontend url)
  appIcon: string; // Icon/ Logo for the app
  offerLink?: string; // Link for the offer
  amount?: string; // Amount of an order
  customerUsername?: string; // Customer username for the email
  contractorUsername?: string; // Contractor username for the email
  title?: string; // Title of the email
  description?: string; // Description of the email
  deliveryDays?: string; // Delivery days for the order
  orderId?: string; // Order id for the order
  orderDue?: string; // Order due date for the order
  requirements?: string; // Requirements for the order
  orderUrl?: string; // Link for the order
  originalDate?: string; // Original date for the order
  newDate?: string; // New date for the order (if grace is given)
  reason?: string; // Reason for the extension of the order (if grace is given)
  subject?: string; // Subject for the email
  header?: string; // Header for the email
  type?: string; // Type of the email
  message?: string; // Message for the email
  serviceFee?: string; // Service fee for the order
  total?: string; // Total amount for the order
  username?: string; // Username for the email
  verifyLink?: string; // Link for email verification
  resetLink?: string; // Link for password reset
  otp?: string; // OTP for OTP verification email
}
