import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import { Heading } from "@/components/ui/heading";
import { Input, InputField } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { Redirect, router } from "expo-router";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignInPage() {
  const [username, setUsername] = useState("");

  const [usernameIsValid, setUsernameIsValid] = useState(true);

  const [usernameErrorText, setUsernameErrorMessage] = useState("");

  const [password, setPassword] = useState("");

  const [passwordIsValid, setPasswordIsValid] = useState(true);

  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const [redirect, setRedirect] = useState(false);

  const onSubmit = () => {
    setUsernameIsValid(true);

    setUsernameErrorMessage("");

    if (username.trim().length == 0) {
      setUsernameIsValid(false);

      setUsernameErrorMessage("Username is required");

      return;
    }

    setPasswordIsValid(true);

    setPasswordErrorMessage("");

    if (password.trim().length == 0) {
      setPasswordIsValid(false);

      setPasswordErrorMessage("Password is required");

      return;
    }

    setUsername("");

    setPassword("");

    setRedirect(true);
  };

  if (redirect) {
    return <Redirect href="/home" />;
  }

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background-0">
      <Card className="w-[80%] p-8 bg-background-50">
        <Heading className="mb-4 color-typography-800" size="2xl">
          Sign In
        </Heading>

        <FormControl isInvalid={!usernameIsValid}>
          <FormControlLabel>
            <FormControlLabelText className="color-typography-800">
              Username
            </FormControlLabelText>
          </FormControlLabel>

          <Input className="my-1" size="md">
            <InputField
              type="text"
              placeholder="Username"
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
          </Input>

          {!usernameIsValid && (
            <FormControlError>
              <FormControlErrorText>{usernameErrorText}</FormControlErrorText>
            </FormControlError>
          )}
        </FormControl>

        <FormControl isInvalid={!passwordIsValid}>
          <FormControlLabel>
            <FormControlLabelText className="color-typography-800">
              Password
            </FormControlLabelText>
          </FormControlLabel>

          <Input className="my-1" size="md">
            <InputField
              type="password"
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </Input>

          {!passwordIsValid && (
            <FormControlError>
              <FormControlErrorText>
                {passwordErrorMessage}
              </FormControlErrorText>
            </FormControlError>
          )}
        </FormControl>

        <Box className="flex-row gap-1 mt-2">
          <Text className="text-primary-800">Don't have an account</Text>

          <Text
            className="text-primary-900 font-bold"
            onPress={() => {
              router.replace("/sign-in");
            }}
          >
            Sign Up
          </Text>
        </Box>

        <Button
          className="w-fit self-end mt-4"
          size="sm"
          variant="outline"
          onPress={onSubmit}
        >
          <ButtonText>Sign In</ButtonText>
        </Button>
      </Card>
    </SafeAreaView>
  );
}
