import { Calendar } from 'lucide-react';
import CalendarForm from '../../components/plan/calendar.form';
import AddForm from '../../components/plan/add.form';
import '../../styles/plan.css'

const PlanPage = () => {
    return (
        <div className="plan-page">

            <div className="page-title">
                <Calendar color="rgba(243, 167, 54, 1)" />
                <h2>Schedule meals</h2>
            </div>
            <div className='plan-body'>
                <CalendarForm />

            </div>

        </div>
    )
}

export default PlanPage;