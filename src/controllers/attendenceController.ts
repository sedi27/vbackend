import { attendances } from '../model';
import { Request, Response } from 'express';
import { eq,sql } from 'drizzle-orm';
import { db } from '../services/databaseService';

interface Attendence {
        id: number,
        company_id: number,
        user_id: number,
        location_id: string,
        leave_id: string,
        clock_in_time: string,
        clock_out_time: string,
        clock_in_ip: string,
        clock_out_ip: string,
        working_from: string,
        late: string,
        half_day: 'yes' | 'no',
        added_by: string,
        last_updated_by: string,
        latitude: string,
        longitude: string,
        shift_start_time: string,
        shift_end_time: string,
        employee_shift_id: number,
        created_at: string,
        updated_at: string,
        work_from_type: 'office' | 'home',
        overwrite_attendance: 'yes'| 'no',
        break_in_ip: string,
        break_in_time: string,
        break_out_ip: string,
        break_out_time: string,
}


export async function createAttendence(req: Request, res: Response){
    const attendence = req.body as Attendence;
    try{
        console.log('attendance to be inserted:', attendence);
        await db.insert(attendances).values(attendence);
        res.status(201).json({ message: 'New Attendence created!'});
    }
    catch(error){
        res.status(500).json({ message: 'Error creating Attendence', error});
    }
}

export async function getAllAttendences(req: Request, res: Response){
    try{
        const allAttendences = await db.select().from(attendances);
        res.status(200).json(allAttendences);
    }
    catch(error){
        res.status(500).json({message: 'Error fetching Attendences', error});
    }
}

export async function getAttendenceById(req: Request, res: Response){
    const attendenceId = parseInt(req.params.id);
    try{
        const attendence = await db.select().from(attendances).where(eq(attendances.id, attendenceId));
        res.status(200).json(attendence);
    }
    catch(error){
        res.status(500).json({message: 'Error fetching Attendence', error});
    }
}


export async function getAttendancesByMonth(req: Request, res: Response) {
    // Default to March 2025 if no query params are passed
    const month = parseInt(req.query.month as string) || 3; // Default to March
    const year = parseInt(req.query.year as string) || 2025; // Default to 2025

    try {
        const attendancesForMonth = await db
            .select()
            .from(attendances)
            .where(
                sql`MONTH(${attendances.clock_in_time}) = ${month} AND YEAR(${attendances.clock_in_time}) = ${year}`
            );

        res.status(200).json(attendancesForMonth);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching attendances for month', error });
    }
}


export async function deleteAttendence(req: Request, res: Response){
    const attendenceId = parseInt(req.params.id);
    try{
        await db.delete(attendances).where(eq(attendances.id, attendenceId));
        res.status(200).json({message: 'Attendence deleted successfully'});
    }
    catch(error){
        res.status(500).json({message: 'Error deleting Attendence', error});
    }

}

export async function updateAttendence(req: Request, res: Response){
    const attendenceId = parseInt(req.params.id);
    const attendence = req.body as Attendence;
    try{
        await db.update(attendances).set(attendence).where(eq(attendances.id, attendenceId));
        res.status(200).json({message: 'Attendence updated successfully'});
    }
    catch(error){
        res.status(500).json({message: 'Error updating Attendence', error});
    }
}