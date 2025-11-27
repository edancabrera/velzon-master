import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
  Button,
} from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import ChatSidebar from "./ChatSidebar";
import GrexWidgets from "./GrexWidgets"; // Import the new widgets component
import {
  LineChart,
  StackedLineChart,
  AreaChart,
  StackedAreaChart,
  StepLineChart,
  LineYChart,
  BasicBarChart,
  BarLabelChart,
  HorizontalBarChart,
  StackedHorizontalBarChart,
  PieChart,
  DoughnutChart,
  BasicScatterChart,
  CandleStickChart,
  GraphChart,
  TreemapChart,
  SunburstChart,
  ParallelChart,
  SankeyChart,
  FunnelChart,
  GaugeChart,
  HeatmapChart,
} from "./ECharts";

import "./GrexDashboard.css"; // Import the new CSS

// A simple hook to detect screen size
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [query]);

  return matches;
};


const EchartsGrex = () => {
  document.title = "E Charts| Velzon - React Admin & Dashboard Template";

  const [isChatOpen, setIsChatOpen] = useState(true); // Default to open on desktop
  const isDesktop = useMediaQuery("(min-width: 992px)");

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  // Adjust initial state for mobile
  useEffect(() => {
    if (!isDesktop) {
      setIsChatOpen(false);
    }
  }, [isDesktop]);

  return (
    <div className="page-content">
      <Container fluid>
        <BreadCrumb title="E Charts" pageTitle="Charts" />

        <div className="grex-dashboard-layout">
          <div className="charts-area">
            <Row>
              <GrexWidgets />
            </Row>
            <Row>
              <Col xl={6}>
                <Card>
                  <CardHeader>
                    <h4 className="card-title mb-0">Line Chart</h4>
                  </CardHeader>
                  <CardBody>
                    <LineChart dataColors='["--vz-success"]' />
                  </CardBody>
                </Card>
              </Col>
              <Col xl={6}>
                <Card>
                  <CardHeader>
                    <h4 className="card-title mb-0">Stacked Line Chart</h4>
                  </CardHeader>
                  <div className="card-body">
                    <StackedLineChart dataColors='["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]' />
                  </div>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col xl={6}>
                <Card>
                  <CardHeader>
                    <h4 className="card-title mb-0">Basic Bar</h4>
                  </CardHeader>
                  <div className="card-body">
                    <BasicBarChart dataColors='["--vz-success"]' />
                  </div>
                </Card>
              </Col>

              <Col xl={6}>
                <Card>
                  <CardHeader>
                    <h4 className="card-title mb-0">Bar Label</h4>
                  </CardHeader>
                  <div className="card-body">
                    <BarLabelChart dataColors='["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger"]' />
                  </div>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col xl={6}>
                <Card>
                  <CardHeader>
                    <h4 className="card-title mb-0">Horizontal Bar</h4>
                  </CardHeader>
                  <div className="card-body">
                    <HorizontalBarChart dataColors='["--vz-primary", "--vz-success"]' />
                  </div>
                </Card>
              </Col>

              <Col xl={6}>
                <Card>
                  <CardHeader>
                    <h4 className="card-title mb-0">Stacked Horizontal Bar</h4>
                  </CardHeader>
                  <div className="card-body">
                    <StackedHorizontalBarChart dataColors='["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]' />
                  </div>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col xl={6}>
                <Card>
                  <CardHeader>
                    <h4 className="card-title mb-0">Pie Charts</h4>
                  </CardHeader>
                  <div className="card-body">
                    <PieChart dataColors='["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]' />
                  </div>
                </Card>
              </Col>

              <Col xl={6}>
                <Card>
                  <CardHeader>
                    <h4 className="card-title mb-0">Doughnut Chart</h4>
                  </CardHeader>
                  <div className="card-body">
                    <DoughnutChart dataColors='["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]' />
                  </div>
                </Card>
              </Col>
            </Row>
            
          </div>

          <ChatSidebar
            isOpen={isChatOpen}
            toggle={toggleChat}
            isDesktop={isDesktop}
          />
        </div>
      </Container>

      <Button color="primary" onClick={toggleChat} className="chat-fab">
        {isChatOpen ? (
          <i className="ri-close-line"></i>
        ) : (
          <i className="ri-chat-3-line"></i>
        )}
      </Button>
    </div>
  );
};

export default EchartsGrex;
