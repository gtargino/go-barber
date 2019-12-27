import {
    startOfDay,
    endOfDay,
    parseISO,
    startOfToday,
    endOfToday,
} from 'date-fns';

import { Op } from 'sequelize';

import Appointment from '../models/Appointment';
import User from '../models/User';

class ScheduleController {
    async index(req, res) {
        const isProvider = await User.findOne({
            where: { id: req.userId, provider: true },
        });

        if (!isProvider) {
            return res
                .status(401)
                .json({ error: 'User must to be a provider' });
        }

        const { date } = req.query;
        const parsedDate = parseISO(date);

        const d = new Date();
        const current_hour = d.getHours();

        console.log(`omg: ${d}`);
        console.log(current_hour);

        console.log(date);
        console.log(parsedDate);
        console.log(startOfToday());
        console.log(endOfToday());
        const appointments = await Appointment.findAll({
            where: {
                provider_id: req.userId,
                canceled_at: null,
                date: {
                    [Op.between]: [
                        startOfDay(parsedDate),
                        endOfDay(parsedDate),
                    ],
                },
            },
            order: ['date'],
        });

        return res.json(appointments);
    }
}

export default new ScheduleController();
