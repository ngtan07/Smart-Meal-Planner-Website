import { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Plus } from "lucide-react";
import AddForm from "./add.form";

const CalendarForm = () => {
    const dayWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const dishDay = ["Breakfast", "Lunch", "Dinner"];

    const [showAdd, setShowAdd] = useState(false);

    // luu date hien tai len state
    const [currentDate, setCurrentDate] = useState(new Date());

    // get tuan hien tai
    const getWeekRange = (date) => {
        const day = date.getDay();
        const diffToMonday = day === 0 ? -6 : 1 - day;

        const startWeek = new Date(date);
        startWeek.setDate(date.getDate() + diffToMonday);

        const endWeek = new Date(startWeek);
        endWeek.setDate(startWeek.getDate() + 6);

        return { startWeek, endWeek };
    };

    // get tuan truoc
    const getPreWeek = () => {
        setCurrentDate((today) => {
            const d = new Date(today);
            d.setDate(d.getDate() - 7);
            return d;
        });
    };

    // get tuan sau
    const getNextWeek = () => {
        setCurrentDate((today) => {
            const d = new Date(today);
            d.setDate(d.getDate() + 7);
            return d;
        });
    };

    // get tung ngay trong tuan
    const getDateOfWeek = (startWeek, index) => {
        const d = new Date(startWeek);
        d.setDate(startWeek.getDate() + index);
        return d;
    };

    // format date with year
    const formatDateWithYear = (date) =>
        date.toLocaleDateString("vi-VN", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });

    // format date no year
    const formatDate = (date) =>
        date.toLocaleDateString("vi-VN", {
            day: "2-digit",
            month: "2-digit",
        });

    // ham lay ngay hom nay
    const isToday = (date) => {
        return (
            date.toDateString() === new Date().toDateString()
        )
    }

    // add mon an
    const handleClickPlus = () => {
        setShowAdd(true);
    }

    const { startWeek, endWeek } = getWeekRange(currentDate);

    return (
        <>
            <div className="calendar-form">
                <div className="week-header">
                    <button onClick={getPreWeek}>
                        <LeftOutlined />
                    </button>

                    <h5>
                        {formatDateWithYear(startWeek)} -{" "}
                        {formatDateWithYear(endWeek)}
                    </h5>

                    <button onClick={getNextWeek}>
                        <RightOutlined />
                    </button>
                </div>

                <div className="day-card-group">

                    {dayWeek.map((day, index) => {
                        const date = getDateOfWeek(startWeek, index);
                        return (

                            <div className={`week-days ${isToday(date) ? 'is-today' : ''}`}>
                                <div key={index} className="week-day-text">
                                    <p>{day}</p>
                                    <p>{formatDate(date)}</p>
                                </div>
                                <div className="week-meal">
                                    {dishDay.map((item, index) => (
                                        <div className="meal-card-group">
                                            <div key={index} className="meal-row">
                                                <p>{item}</p>
                                                <p>No dishes available</p>
                                            </div>
                                            <button
                                                className="action-btn add"
                                                onClick={handleClickPlus}
                                            >
                                                <Plus />
                                            </button>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
            {showAdd && <AddForm />}
        </>
    );
};

export default CalendarForm;
