import React, { FC, memo, ReactElement } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  RefreshControl,
  ScrollView,
} from "react-native";
import { theme } from "../../../theme";
import { normalize } from "../../helper/utils";

const KeywordWrapper: FC<{
  children: ReactElement;
  padding?: number;
  shouldLoadMoreContent?: (event: unknown) => void;
  onRefresh?: () => void;
  shouldResresh?: boolean;
  mgTop?: number;
}> = ({
  children,
  padding = 15,
  shouldLoadMoreContent,
  onRefresh,
  shouldResresh = false,
  mgTop = 0,
}) => {
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{ flex: 1 }}
      keyboardVerticalOffset={0}
    >
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        nestedScrollEnabled={true}
        contentContainerStyle={{
          flexGrow: 1,
          padding: normalize(padding),
          backgroundColor: theme.primary,
          minHeight: "100%",
          marginTop: Platform.select({
            android: 0,
            ios: normalize(mgTop),
          }),
        }}
        onScroll={(event) =>
          shouldLoadMoreContent && shouldLoadMoreContent(event)
        }
        refreshControl={
          shouldResresh ? (
            <RefreshControl refreshing={false} onRefresh={onRefresh} />
          ) : (
            <></>
          )
        }
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default memo(KeywordWrapper);
