ALTER TABLE `leaves` DROP INDEX `leave_company_id_unique`;--> statement-breakpoint
ALTER TABLE `leaves` MODIFY COLUMN `company_id` int;--> statement-breakpoint
ALTER TABLE `leaves` MODIFY COLUMN `unique_id` varchar(255);--> statement-breakpoint
ALTER TABLE `leaves` MODIFY COLUMN `reject_reason` varchar(255);--> statement-breakpoint
ALTER TABLE `leaves` MODIFY COLUMN `paid` enum('yes','no');--> statement-breakpoint
ALTER TABLE `leaves` MODIFY COLUMN `added_by` varchar(255);--> statement-breakpoint
ALTER TABLE `leaves` MODIFY COLUMN `last_updated_by` varchar(255);--> statement-breakpoint
ALTER TABLE `leaves` MODIFY COLUMN `event_id` varchar(255);--> statement-breakpoint
ALTER TABLE `leaves` MODIFY COLUMN `approved_by` varchar(255);--> statement-breakpoint
ALTER TABLE `leaves` MODIFY COLUMN `half_day_type` enum('first_half','second_half');--> statement-breakpoint
ALTER TABLE `leaves` MODIFY COLUMN `created_at` timestamp DEFAULT CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE `leaves` MODIFY COLUMN `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE `leaves` MODIFY COLUMN `manager_status_permission` enum('yes','no');--> statement-breakpoint
ALTER TABLE `leaves` MODIFY COLUMN `approve_reason` varchar(255);