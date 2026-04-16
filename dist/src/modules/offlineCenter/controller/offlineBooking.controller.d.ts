/**
 * @desc    Book a seat for offline center
 * @route   POST /api/v1/offline-bookings
 * @access  Public
 */
export declare const createOfflineBooking: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Get all bookings (Admin filterable)
 * @route   GET /api/v1/offline-bookings
 * @access  Admin / Private (authenticated user can see theirs)
 */
export declare const getAllOfflineBookings: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Update booking status
 * @route   PATCH /api/v1/offline-bookings/:id/status
 * @access  Admin
 */
export declare const updateOfflineBookingStatus: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
//# sourceMappingURL=offlineBooking.controller.d.ts.map