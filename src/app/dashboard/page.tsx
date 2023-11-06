import BasicWidget from "@/components/widgets/BasicWidget";
import "./page.scss";
import InfoXSWidget from "@/components/widgets/extraSmall/InfoXSWidget";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ArticleIcon from "@mui/icons-material/Article";
import InfoSMWidget from "@/components/widgets/small/InfoSMWidget";
import InfoDetailsSMWidget from "@/components/widgets/small/InfoDetailsSMWidget";
import ListMDWidget from "@/components/widgets/medium/ListMDWidget";
import EventMDWidget from "@/components/widgets/medium/EventMDWidget";

export default function Dashboard() {
  return (
    <div className="page">
      <section className="dashboard-small-cards-container">
        <InfoXSWidget
          icon={<AssignmentIcon />}
          label="Test"
          description="test de"
          color="warning"
        />
        <InfoXSWidget
          icon={<ArticleIcon />}
          color="danger"
          label="Test"
          description="test de"
        />
        <BasicWidget colSpan="8" rowSpan="2">
          test3
        </BasicWidget>
        <EventMDWidget
          image="dsf"
          label="asdfasdf"
          description="sdfasdf"
          buttonText="fasdfadf"
          onClick={() => {}}
        />
        <BasicWidget colSpan="6">test5</BasicWidget>
        <BasicWidget colSpan="6">test6</BasicWidget>
        <BasicWidget>test7</BasicWidget>
        <InfoDetailsSMWidget
          icon={<ArticleIcon />}
          amount="43"
          color="danger"
          label="test"
          description="sdfsdf sdfsdf"
        ></InfoDetailsSMWidget>
        <InfoSMWidget
          icon={<ArticleIcon />}
          color="danger"
          label="test"
          description="sdfsdf sdfsdf"
        ></InfoSMWidget>
        <ListMDWidget label="sdfasdfa" description="sdfasdfasdfasdf" />
        <BasicWidget>test13</BasicWidget>
        <BasicWidget>test14</BasicWidget>
        <BasicWidget>test15</BasicWidget>
        <BasicWidget>test16</BasicWidget>
        <BasicWidget>test17</BasicWidget>
        <BasicWidget>test18</BasicWidget>
        <BasicWidget>test19</BasicWidget>
        <BasicWidget>test20</BasicWidget>
        <BasicWidget>test21</BasicWidget>
        <BasicWidget>test22</BasicWidget>
        <BasicWidget>test23</BasicWidget>
      </section>
    </div>
  );
}
