import {requestWithAuth} from "@/service/project/request";
import {Position, ProjectAuthMap} from "@/utils/type";

export type BoardPosition = {
    boardPositionId: bigint;
    position: Position;
}

export type ProjectSettingBoardData = {
    boardId: bigint;
    title: string;
    content: string;
    recruitmentStatus: boolean;
    contact: string;
    boardPositions: BoardPosition[];
}
/**
 * 프로젝트 세팅 - 프로젝트 게시글 정보 조회
 * @param projectId
 */
export const getProjectSettingBoardInfo = async (projectId: bigint) => {
    return await requestWithAuth("GET", `/api/project/setting/board?projectId=${projectId}`);
}

type ProjectSettingBoardUpdReqData = {
    projectId: bigint;
    boardId: bigint;
    authMap: ProjectAuthMap;
    title: string;
    content: string;
    recruitmentStatus: boolean;
    contact: string;
    positionIds: bigint[];
};

/**
 * 프로젝트 세팅 - 프로젝트 게시글정보 수정
 * @param reqData
 */
export const updateProjectSettingBoard = async (reqData: ProjectSettingBoardUpdReqData) => {
    return await requestWithAuth("PUT", "/api/project/setting/board", reqData);
}