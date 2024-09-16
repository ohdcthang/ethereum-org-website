import * as React from "react"

import { ChildOnlyProp } from "@/lib/types"

import { Center } from "@/components/ui/flex"

import { cn } from "@/lib/utils/cn"

import { CorrectIcon, IncorrectIcon, TrophyIcon } from "../../icons/quiz"

import { AnswerStatus } from "./useQuizWidget"

type AnswerIconProps = {
  answerStatus: AnswerStatus
}

/**
 * Icon shown for the answer
 *
 * Defaults to the `TrophyIcon` prior to answering a question
 */
export const AnswerIcon = ({ answerStatus }: AnswerIconProps) => {
  const commonProps = {
    color: "neutral",
  }

  const IconWrapper = (props: ChildOnlyProp) => {
    const getWrapperBg = () => {
      if (!answerStatus) {
        return "bg-primary"
      }
      if (answerStatus === "correct") {
        return "bg-success"
      }
      return "bg-error"
    }

    return (
      <Center
        className={cn("size-[50px] rounded-full", getWrapperBg())}
        {...props}
      />
    )
  }

  if (!answerStatus) {
    return (
      <IconWrapper>
        <TrophyIcon {...commonProps} />
      </IconWrapper>
    )
  }

  if (answerStatus === "correct") {
    return (
      <IconWrapper>
        <CorrectIcon {...commonProps} />
      </IconWrapper>
    )
  }

  return (
    <IconWrapper>
      <IncorrectIcon {...commonProps} />
    </IconWrapper>
  )
}
