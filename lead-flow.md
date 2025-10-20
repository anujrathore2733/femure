# Lead Flow Diagram

Below is the Mermaid diagram wrapped for Markdown preview.

```mermaid
%% Lead Flow - Mermaid Diagram
flowchart LR
  %% Top-level starting point
  A[Lead Generation] --> B{Lead Source}

  %% Two lead source branches
  B --> C[Form filled on website]
  B --> D[Callback / Call Received]

  %% If form filled -> lead auto-created in CRM
  C --> E[CRM: Lead auto-created]
  E --> F[Lead Status: Prospecting]

  %% If call -> BDA creates the lead with mobile & patient info
  D --> G[BDA creates lead in CRM<br/>(mobile + patient details)]
  G --> F

  %% Prospecting work by BDA
  F --> H[BDA: Make calls & log conversation details]
  H --> H_loop[Schedule next follow-up / update notes]
  H_loop --> F

  %% Outcome after repeated follow-ups
  H --> I{Outcome after follow-ups}
  I --> J[Converted → Move to Customer / Treatment flow]
  I --> K[Dead → Mark as Dead / Closed - Lost]

  %% Optional: small annotations for CRM fields BDA should capture
  subgraph NOTES [CRM fields BDA should maintain]
    N1[Call notes / summary]
    N2[Next follow-up date]
    N3[Lead source]
    N4[Contact number / alternate contact]
    N5[Patient details (age, symptoms, interest)]
  end

  H --> N1
  H --> N2
  H --> N3
  G --> N4
  G --> N5
```
```
