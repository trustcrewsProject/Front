import React from 'react';
import CalendarInput from "@/components/ui/form/CalendarInput";
import {useRecoilState} from "recoil";
import {projectInfoFieldSelector} from "@/store/project/setting/ProjectSettingFormStateStore";


function ProjectDate() {
    const [{startDate}, setStartDate] = useRecoilState(projectInfoFieldSelector('startDate'));
    const [{endDate}, setEndDate] = useRecoilState(projectInfoFieldSelector('endDate'));

    return (
        <div className="w-[380px] mobile:w-full space-y-5 mobile:space-y-3 mobile:mx-auto">
            <CalendarInput id="startDate" label="시작 날짜" placeholder="날짜를 선택해주세요."
                           date={startDate} setDate={(startDate:string) => setStartDate({startDate})}/>
            <CalendarInput id="endDate" label="종료 날짜" placeholder="날짜를 선택해주세요."
                           date={endDate} setDate={(endDate:string) => setEndDate({endDate})}/>
        </div>
    );
}

export default ProjectDate;