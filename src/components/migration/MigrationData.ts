
export const legacyCode = `<DTS:Executable xmlns:DTS="www.microsoft.com/SqlServer/Dts"
  DTS:ExecutableType="SSIS.Package.3">
  <DTS:Property DTS:Name="Name">customer_pipeline.dtsx</DTS:Property>
  <DTS:ConnectionManager>
    <DTS:Property DTS:Name="DelayValidation">false</DTS:Property>
    <DTS:Property DTS:Name="ObjectName">SQL Server Connection</DTS:Property>
    <DTS:Property DTS:Name="DTSID">{6F7B4FD5-5AE6-4F99-A4DB-CB38CF270B7C}</DTS:Property>
    <DTS:Property DTS:Name="Description">Customer Database</DTS:Property>
    <DTS:Property DTS:Name="CreationName">OLEDB</DTS:Property>
    <DTS:ObjectData>
      <DTS:ConnectionManager>
        <DTS:Property DTS:Name="ServerName">SQLSERVER01</DTS:Property>
        <DTS:Property DTS:Name="DatabaseName">CustomerDB</DTS:Property>
        <DTS:Property DTS:Name="AccessMode">0</DTS:Property>
      </DTS:ConnectionManager>
    </DTS:ObjectData>
  </DTS:ConnectionManager>
  <DTS:Executable DTS:ExecutableType="Microsoft.Pipeline">
    <DTS:Property DTS:Name="ObjectName">Data Flow Task</DTS:Property>
    <DTS:Property DTS:Name="DTSID">{1E6211D2-7A44-4351-9CF4-8933F72E73B5}</DTS:Property>
    <DTS:Property DTS:Name="Description">Extract Customer Data</DTS:Property>
    <!-- Source component -->
    <component name="CustomerSource" 
              componentClassID="{2C0A8BE5-1EDC-4353-A0EF-B778599C65A0}"
              description="OLE DB Source" startId="1">
      <properties>
        <property name="SqlCommand" dataType="System.String">
          SELECT * FROM Customers WHERE Region = 'West'
        </property>
      </properties>
    </component>
    <!-- Derived Column component -->
    <component name="AddFullName" 
              componentClassID="{9CF90BF0-9957-4E8A-9DE2-4E1B465C9D76}"
              description="Derives values by applying expressions">
      <properties>
        <property name="Expression" dataType="System.String">
          [FirstName] + " " + [LastName]
        </property>
        <property name="FriendlyExpression" dataType="System.String">
          FirstName + " " + LastName as FullName
        </property>
      </properties>
    </component>
  </DTS:Executable>
</DTS:Executable>`;

export const convertedCode = `{
  "name": "customer_pipeline",
  "execution": [
    {
      "type": "IngestJDBC",
      "name": "jdbc_connection_customers",
      "connection_name": "jdbc_sqlserver",
      "query": "SELECT * FROM Customers WHERE Region = 'West''"
    },
    {
      "type": "DerivedColumn",
      "columns": [
        {
          "name": "FullName",
          "expression": "concat(FirstName, ' ', LastName)"
        }
      ]
    }
  ]
}`;

export const conversationFlow = [
  { role: 'ai', text: "I see you have a legacy SSIS package. How can I help with this pipeline?" },
  { role: 'user', text: "Can you migrate this SSIS package to Mu-Pipeline format?" },
  { role: 'ai', text: "I'll help you migrate this SSIS package. Let me analyze the structure first." },
  { role: 'ai', text: "I've identified the connection settings to SQL Server and the data flow components." },
  { role: 'ai', text: "There's an OLE DB source that queries customers from the West region." },
  { role: 'ai', text: "And I see a derived column that creates a FullName by concatenating FirstName and LastName." },
  { role: 'ai', text: "Generating the equivalent Mu-Pipeline configuration..." },
  { role: 'ai', text: "Migration complete! I've converted your SSIS package to a modern Mu-Pipeline JSON format. Would you like me to explain the key differences?" },
  { role: 'user', text: "Yes, please explain the main improvements." },
  { role: 'ai', text: "The new format offers several advantages:\n\n1. Human-readable JSON instead of verbose XML\n2. Simplified connection management\n3. Clear transform pipeline with explicit data types\n4. Built-in destination configuration\n5. No GUIDs or complex component references\n\nIt's also version-control friendly and can be deployed via CI/CD pipelines." }
];
