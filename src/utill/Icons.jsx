import {
  Zap, // Trigger
  Play, // Action
  Bell, // Notification
  GitBranch, // Conditional
  Clock, // Delay
  RefreshCw, // Loop
  Workflow, // Sub-process
  SplitSquareHorizontal, // Parallel
  GitFork, // Decision
} from "lucide-react";

export const nodeIcons = {
  Trigger: <Zap size={20} />,
  Action: <Play size={20} />,
  Notification: <Bell size={20} />,
  Conditional: <GitBranch size={20} />,
  Delay: <Clock size={20} />,
  Loop: <RefreshCw size={20} />,
  Subprocess: <Workflow size={20} />,
  Parallel: <SplitSquareHorizontal size={20} />,
  Decision: <GitFork size={20} />,
};