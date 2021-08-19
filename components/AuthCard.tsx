import { PropsWithChildren } from "react";
import { Card, Typography, Grid } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";

import Logo from "@components/Logo";

export default function AuthCard({
  content,
  children,
}: PropsWithChildren<AuthCardProps>) {
  return (
        <Card>
          <CardContent>
            <div className="header">
              <div>
                <Typography component="h1">{content.title}</Typography>
                <Typography component="p">{content.text}</Typography>
              </div>
              <Logo />
            </div>
            <div className="auth-form">{children}</div>
          </CardContent>
        </Card>
     
  );
}

interface AuthCardProps {
  content: {
    title: string;
    text: string;
  };
}
