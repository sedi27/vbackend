import { leaves } from '../model/leavesModel';
import { eq } from 'drizzle-orm';
import { Request, Response } from 'express';
import { db } from '../services/databaseService';


interface Leave {
    company_id: number;
    user_id: number;
    leave_type_id: number;
    unique_id: string;
    duration: string;
    leavedate: string;
    reason: string;
    status: 'pending' | 'approved' | 'rejected';
    reject_reason: string;
    paid: 'yes' | 'no';
    added_by: string;
    last_updated_by: string;
    event_id: string;
    approved_by: string;
    half_day_type: 'first_half' | 'second_half';
    createdAt: string;
    updatedAt: string;
    manager_status_permission: 'yes' | 'no';
    approve_reason: string;
}


export async function createleave(req: Request, res: Response){
    const leave = req.body as Leave;

    try{
        console.log('Leave to be inserted:', leave);
        await db.insert(leaves).values(leave);
        res.status(201).json({ message: 'New leave created!'});
    }
    catch(error){
        res.status(500).json({ message: 'Error creating leave', error});
    }
};

export async function getAllleaves(req: Request, res: Response){
    try{
        const allleaves = await db.select().from(leaves);
        res.status(200).json(allleaves);
    }
    catch(error){
        res.status(500).json({message: 'Error fetching leaves', error});
    }
}

export async function getleaveById(req: Request, res: Response){
    const leaveId = parseInt(req.params.id);
    try{
        const client = await db.select().from(leaves).where(eq(leaves.id, leaveId));
        res.status(200).json(client);
    }
    catch(error){
        res.status(500).json({message: 'Error fetching leave', error});
    }
    
}

export async function deleteleave(req: Request, res: Response){
    const id = parseInt(req.params.id);
    try{
        await db.delete(leaves).where(eq(leaves.id, id));
        res.status(200).json({message: 'leave deleted successfully'});
    }
    catch(error){
        res.status(500).json({message: 'Error deleting leave', error});
    }
}

export async function updateleave(req: Request, res: Response){
    const id = parseInt(req.params.id);
    const leave = req.body as Partial<Leave>; // Use Partial to allow partial updates
    try{
        await db.update(leaves).set(leave).where(eq(leaves.id, id));
        res.status(200).json({message: 'leave updated successfully'});
    }
    catch(error){
        res.status(500).json({message: 'Error updating leave', error});
    }
}