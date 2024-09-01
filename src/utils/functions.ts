export function deleteTypeNavigatorFromString(value: string) {
  let newValue = value
  if (value.includes('tab-')) {
    newValue = value.split('tab-')[1]
  }

  if (value.includes('stacksHome-')) {
    newValue = value.split('stacksHome-')[1]
  }

  if (value.includes('stacksContent-')) {
    newValue = value.split('stacksContent-')[1]
  }

  if (value.includes('stacksCollege-')) {
    newValue = value.split('stacksCollege-')[1]
  }

  if (value.includes('stacksMore-')) {
    newValue = value.split('stacksMore-')[1]
  }
  return newValue
}
