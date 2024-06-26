import styled from "styled-components";
import { Breadcrumb, Table, Row, Col, Image, Tag } from "antd";
import Link from "next/link";
import { useState } from "react";
import StudentAPI from "apis/student";
import QuestionAPI from "apis/question";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import {
  PageHeader,
  PageHeaderNaviagtion,
  TableBodyContainer,
  TitleContent,
} from "styles/styled/PageHeader";
import { Colors } from "utils/colors";
import BasicInformation from "./BasicInformation";

// interface FilterParams {
//   currentPage: number;
//   pageSize: number;
//   status: string;
//   search: string;
// }

// const DefaultFilterParams = {
//   currentPage: INITIAL_CURRENT_PAGE,
//   pageSize: DEFAULT_PAGE_SIZE,
//   status: "true",
//   search: "",
// };

const StudentDetails = () => {
  const [_searchValue, _setSearchValue] = useState("");
  const router = useRouter();
  const { programId } = router.query;
  const id = programId;
  const studentAPI = new StudentAPI();
  const questionAPI = new QuestionAPI();

  const programListColumns: any = [
    {
      title: "S.N",
      render: (_text: any, _record: any, index: number) => index + 1,
      responsive: ["sm", "md", "lg"],
    },
    {
      title: "Question",
      key: "question_text",
      render: (row: any) => <text>{row?.question?.question_text}</text>,
      responsive: ["sm", "md", "lg"],
    },
    {
      title: "Question Type",
      render: (row: any) => <text>{row?.question?.question_type}</text>,
      responsive: ["sm", "md", "lg"],
    },
    {
      title: "Options",
      render: (row: any) => (
        <text>
          {row.options.map((option: any) => `${option.option_text} : `)}
        </text>
      ),
      responsive: ["sm", "md", "lg"],
    },
    // {
    //   title: "Correct Answer",
    //   render: (row: any) => (
    //     <text>
    //       {row.options.map((option: any) =>
    //         row.correct_answers?.map((correct: any) => {
    //           if (option.id === correct.option_id)
    //             // Update here: Use === for comparison
    //             return (
    //               <StyledTag color={"success"}>{option.option_text}<hjr /StyledTag>
    //             );
    //         })
    //       )}
    //     </text>
    //   ),
    //   responsive: ["sm", "md", "lg"],
    // },
    {
      title: "Attempted Answer",
      render: (row: any) => (
        <text>
          {row.attempted_options?.map((correct: any) => {
            // Update here: Use === for comparison
            return (
              <StyledTag color={"success"}>{correct.option_text}</StyledTag>
            );
          })}
        </text>
      ),
      responsive: ["sm", "md", "lg"],
    },
  ];

  // const [_filterParams, _setFilterParams] =
  //   useState<FilterParams>(DefaultFilterParams);

  const studentQuery = useQuery(
    ["StudentData"],
    async () =>
      await studentAPI
        .get(id)
        .then((res) => res.data.data)
        .catch((err) => err),
    {
      enabled: !!id,
    }
  );

  const queryList = useQuery(
    ["StudentList"],
    async () =>
      await questionAPI
        .getRandomQuestion(id)
        .then((res) => res.data.data)
        .catch((err) => err),
    {
      enabled: !!id,
    }
  );

  const programList = queryList?.data;

  const studentData = studentQuery?.data;
  return (
    <UsersContainer>
      <PageHeader>
        <PageHeaderNaviagtion>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link href="/dashboard">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <span style={{ color: Colors.BLACK }}>{studentData?.name}</span>
            </Breadcrumb.Item>
          </Breadcrumb>
          <TitleContent>
            <h2>{studentData?.name} </h2>
            <Tag color={"success"}>Passed</Tag>
          </TitleContent>
        </PageHeaderNaviagtion>
      </PageHeader>
      <ProfileWrapper>
        <LeftProfile lg={5} sm={24}>
          <ImageWrapper>
            <div>
              <ProfileImage>
                <Image className={`profile-img`} alt="avatar" src={""} />
              </ProfileImage>
            </div>
          </ImageWrapper>
        </LeftProfile>
        <Col lg={19} sm={24} className="search-col-margin">
          <BasicInformation data={studentData} />
        </Col>
      </ProfileWrapper>
      <TableBodyContainer>
        <Table
          columns={programListColumns}
          dataSource={programList}
          scroll={{ x: 1000 }}
          // pagination={
          //   queryList?.data?.meta?.total > 10 && {
          //     defaultPageSize: 10,
          //     total: metaData?.total,
          //     hideOnSinglePage: true,
          //     showSizeChanger: true,
          //     showTotal: (total, range) =>
          //       `${range[0]}-${range[1]} of ${total} items`,
          //     onChange: (page, pageSize) => {
          //       setFilterParams({
          //         ...filterParams,
          //         currentPage: page,
          //         pageSize,
          //       });
          //     },
          //     className: "bg-white-halfrem",
          //     responsive: true,
          //   }
          // }
        />
      </TableBodyContainer>
    </UsersContainer>
  );
};

export default StudentDetails;

const UsersContainer = styled.div``;

const ProfileWrapper = styled(Row)`
  padding: 25px;
`;

const LeftProfile = styled(Col)`
  background-color: #fff;
  height: 300px;
`;

const ProfileImage = styled.div`
  width: 200px;
  text-align: center;
  .ant-image {
    width: 100%;
    .profile-img {
      &.img-padding {
        padding: 40px;
      }
      background: ${Colors.LIGHTER_BG};
      border-radius: 50%;
    }
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const StyledTag = styled(Tag)`
  margin-left: 15px;
`;
