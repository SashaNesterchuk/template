import BasicWidget from "@/components/widgets/BasicWidget";
import "./page.scss";

export default function Dashboard() {
  return (
    <div className="page">
      <section className="dashboard-small-cards-container">
        <BasicWidget>test1</BasicWidget>
        <BasicWidget>test2</BasicWidget>
        <BasicWidget colSpan="8" rowSpan="2">
          test3
        </BasicWidget>
        <BasicWidget colSpan="4">test4</BasicWidget>
        <BasicWidget colSpan="6">test5</BasicWidget>
        <BasicWidget colSpan="6">test6</BasicWidget>
        <BasicWidget>test7</BasicWidget>
        <BasicWidget>test8</BasicWidget>
        <BasicWidget>test9</BasicWidget>
        <BasicWidget>test10</BasicWidget>
        <BasicWidget>test11</BasicWidget>
        <BasicWidget>test12</BasicWidget>
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
