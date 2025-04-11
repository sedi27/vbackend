ALTER TABLE `employees` MODIFY COLUMN `company_id` int;--> statement-breakpoint
ALTER TABLE `employees` MODIFY COLUMN `state` varchar(100);--> statement-breakpoint
ALTER TABLE `employees` MODIFY COLUMN `city` varchar(100);--> statement-breakpoint
ALTER TABLE `employees` MODIFY COLUMN `slack_username` varchar(100);--> statement-breakpoint
ALTER TABLE `employees` MODIFY COLUMN `added_by` int;--> statement-breakpoint
ALTER TABLE `employees` MODIFY COLUMN `last_updated_by` int;--> statement-breakpoint
ALTER TABLE `employees` MODIFY COLUMN `attendance_reminder` date DEFAULT CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE `employees` MODIFY COLUMN `calendar_view` varchar(100);--> statement-breakpoint
ALTER TABLE `employees` MODIFY COLUMN `contract_end_date` date;--> statement-breakpoint
ALTER TABLE `employees` MODIFY COLUMN `internship_start_date` date;--> statement-breakpoint
ALTER TABLE `employees` MODIFY COLUMN `internship_end_date` date;--> statement-breakpoint
ALTER TABLE `employees` MODIFY COLUMN `marriage_anniversary_date` date;