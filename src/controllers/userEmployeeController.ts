import { Request, Response } from 'express';
import { db } from '../services/databaseService';
import { users, employees } from '../model';
import { ResultSetHeader } from 'mysql2';
import { InferInsertModel } from 'drizzle-orm';
type NewEmployee = InferInsertModel<typeof employees>;

interface UserEmployeeData {
  name: string;
  email: string;
  password: string;
  employee_id: string;
  company_id: number;
  role?: 'user' | 'admin' | 'superadmin';
  country?: string;
  state?: string;
  city?: string;
  address?: string;
  monthly_salary?: number;
  department_id?: number;
  designation_id?: number;
  joining_date?: string;
  last_date?: string;
  added_by?: number;
  last_updated_by?: number;
  attendance_reminder?: string;
  date_of_birth?: string;
  calendar_view?: string;
  about_me?: string;
  reporting_to?: number;
  contract_end_date?: string;
  internship_start_date?: string;
  internship_end_date?: string;
  employment_type?: string;
  marriage_anniversary_date?: string;
  marital_status?: string;
  notice_period_end_date?: string;
  notice_period_start_date?: string;
  probation_end_date?: string;
}

export const createUserAndEmployee = async (req: Request, res: Response): Promise<void> => {
  const data = req.body as UserEmployeeData;

  try {
    await db.transaction(async (trx) => {
      // const hashedPassword = await bcrypt.hash(data.password, 10);

      const [result] = await trx.insert(users).values({
        username: String(data.name),
        email: String(data.email),
        password: String(data.password),
        role: data.role || 'user',
        // company_id: data.company_id,
      })as [ResultSetHeader, unknown];
      
      const userId = result.insertId;


      const employeeData = Object.fromEntries(
        Object.entries({
          user_id: userId,
          employee_id: data.employee_id,
          country: data.country,
          state: data.state,
          city: data.city,
          address: data.address,
          monthly_salary: data.monthly_salary,
          department_id: data.department_id,
          designation_id: data.designation_id,
          joining_date: data.joining_date,
          last_date: data.last_date,
          added_by: data.added_by,
          last_updated_by: data.last_updated_by,
          attendance_reminder: data.attendance_reminder,
          date_of_birth: data.date_of_birth,
          calendar_view: data.calendar_view,
          about_me: data.about_me,
          reporting_to: data.reporting_to,
          contract_end_date: data.contract_end_date,
          internship_start_date: data.internship_start_date,
          internship_end_date: data.internship_end_date,
          employment_type: data.employment_type,
          marriage_anniversary_date: data.marriage_anniversary_date,
          marital_status: data.marital_status,
          notice_period_end_date: data.notice_period_end_date,
          notice_period_start_date: data.notice_period_start_date,
          probation_end_date: data.probation_end_date,
        }).filter(([, value]) => value !== undefined)
      ) as unknown as NewEmployee;
      

      await trx.insert(employees).values(employeeData);
    });

    res.status(201).json({ message: 'User and employee created successfully' });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('❌ Error during transaction:', err.message);
      res.status(500).json({ error: 'Failed to create user and employee', message: err.message });
    } else {
      console.error('❌ Unknown error:', err);
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};
